import { NumberInput, Select, Group, GroupLabel } from "./input";
import { InputArea, OutputArea, AreaTitle, Tab, OutputContent, OutputNote } from "./tabs";
import { CardContainer, CardImage, CardName, Card } from "./input/choice_cards";

import styles from "../../styles/research_status_type/exp.module.css";
import React, { ChangeEventHandler, FormEvent, useMemo, useState } from "react";
import { convertExp, ratioLabels } from "../../util/exp_ratio";
import { BodyType, bodyTypes } from "../../util/body_types";

import expData from "../../../public/exp.json";
import headKindData from "../../../public/head_kind_data.json";
import headImageData from "../../../public/head_kind_image.json";

import { useExp } from "../../hooks/use_exp";
import { Eva, evaRates, isEva } from "../../util/eva";
import clsx from "clsx";
import { HeadKind } from "../../util/head_kinds";

const HeadKindMenu = React.memo(({ headKind, onChange }: { headKind?: HeadKind, onChange: (kind: HeadKind | undefined) => void}) => {
  const headKinds = useMemo(() => 
    headKindData.kinds
      .filter(kind => kind.expMitigation !== 0)
      .sort((a, b) => -(a.expMitigation - b.expMitigation))
    , []);
  return (
    <Group>
      <GroupLabel> 頭型 </GroupLabel>
      <CardContainer>
        <Card onClick={() => onChange(undefined)} className={clsx(headKind === undefined && styles.chosenHeadKind)}>
          <CardImage />
          <CardName> なし </CardName>
        </Card>
        {
          headKinds
          .map((kind, i) => (
            <Card key={i} onClick={() => onChange(kind)} className={clsx(kind.name === headKind?.name && styles.chosenHeadKind)}>
              <CardImage>
                <svg className={styles.svg} viewBox="0 0 210 210">
                  <use className={styles.use} fill="#005eac"
                    href={"#all_svg__" + headImageData.images.find(data => data.name == kind.name)?.svgID ?? ""} />                  
                </svg>
              </CardImage>
              <CardName> { kind.name } </CardName>
            </Card>
          ))
        }
      </CardContainer>
    </Group>
  )
}, (prev, next) => {
  console.log(prev, next);
  return prev.headKind?.name === next.headKind?.name
});
HeadKindMenu.displayName = "HeadKindMenu";


const Exp = () => {
  const [ eva, setEva ] = useState<Eva>(0);
  const [ lv, setLv ] = useState<number>(1);
  const [ nextLvExp, setTotal, setNext ] = useExp();
  const [ headKind, setHeadKind ] = useState<{ name: string, expMitigation: number }>();

  const [ isMaxLv, setIsMaxLv ] = useState<boolean>(false);

  /*
    頭型の名前は覚えるものではない。
    だから、画像を添付すべきだ。

    -> 画像はutil内でimportする。
    -> util内では、必要な頭型に Inline-svg がマッピングされている。

    -> useRefで直接SVGを取得してもよいが、、、
    -> とにかく、CSSやJavaScriptでスタイルを変更できなければならない。

    基本的に画像を作らないために、経験値の干渉がない頭型は「その他」に指定する。 -> ok
    柄の選択で使用した Pattern 系コンポーネントを流用したい。　-> ok

    コンポーネント名をすべてエラーがないように変更し、 -> ok
    また、PatternContainerのwidth など適切な形に修正する。 -> ok
  */

  const getValue = (e: FormEvent<HTMLInputElement>) => {
    return e.currentTarget.valueAsNumber || 0;
  }

  const search = (lv: number, exp: number, eva: Eva, expMitigation: number) => {
    const mitigationValue = (100 - expMitigation) / 100;  // 百分率 -> 0 ~ 1
    console.log(expMitigation, mitigationValue)

    const index = lv + 1;
    const baseVal = expData.total[index] * mitigationValue;
    console.log(index, baseVal)

    const candidates = bodyTypes.get(eva);
    const differences = new Map<BodyType, number>();

    if (candidates === undefined || !candidates.length) throw new Error(`$回避率 {eva} の体格情報は未実装です。`);

    candidates.forEach(bodyType => {
      const converted = convertExp(baseVal, "A", bodyType.expRatio); // 最大型経験値テーブルを必要な経験値テーブルに変換
      const diff = Math.abs(converted - exp);
      differences.set(bodyType, diff);
    });

    console.log(differences);

    const sorted = Array.from(differences.entries()).sort((a, b) => a[1] - b[1]);
    return sorted.filter(candidate => candidate[1] === sorted[0][1]);
  }

  const evaChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const input = Number(e.currentTarget.value);
    if (isEva(input)) setEva(input);
  }

  const headKindChangeHandler = (kind: HeadKind | undefined) => {
    setHeadKind(kind);
  }


  return (
    <Tab>
      <InputArea>
        <AreaTitle> EXP </AreaTitle>
        <Group>
          <GroupLabel> データ </GroupLabel>
          <p>
            <Select onChange={evaChangeHandler}>
              {
                evaRates.map((eva, i) => (
                  <option key={i} value={eva}> 回避{ eva } </option>
                ))
              }
            </Select>
          </p>
          <p>
            <NumberInput id="lv" min={1} max={500} placeholder="現在のLv" required={true} onChange={e => setLv(getValue(e))} />
          </p>
          <p>
            <NumberInput id="exp-total" min={0} placeholder="累計EXP" required={true} className={styles.expInput} onChange={e => setTotal(getValue(e))}/>
            <NumberInput id="exp-next" min={0} placeholder="次のLvに必要なEXP" required={true} className={styles.expInput} onChange={e => setNext(getValue(e))}/>
          </p>
          <p>
            <input type="checkbox" onClick={() => setIsMaxLv(!isMaxLv)} id="isMaxLv"/> 
            <label htmlFor="isMaxLv"> 世代最大Lv</label>
          </p>
        </Group>
        <HeadKindMenu headKind={headKind} onChange={headKindChangeHandler} />
      </InputArea>

      <OutputArea>
        <AreaTitle> OUTPUT / EXP </AreaTitle>
        <OutputContent>
          <OutputNote>
          {
            isMaxLv ? (
              <>
                各タイプの Lv. { lv } 到達に必要な経験値と { nextLvExp } とを比較します。
              </>
            ) : (
              <>
                個体の次レベル（Lv.{ lv + 1 }）到達時の経験値は { nextLvExp } です。
              </>
            )
          }
          </OutputNote>

          { 
            lv < 3 && 
            <OutputNote>
              注意：<b>Lv が極端に低い場合、他の経験値タイプが干渉して適切に判定できないおそれがあります。</b>
            </OutputNote>
          }
          
          <OutputNote>
            逆算します...
          </OutputNote>

          <ul className={styles.list}>
            { 
              search(lv + (isMaxLv ? -1 : 0), nextLvExp, eva, headKind?.expMitigation ?? 0).map((candidate, i) => {
                const [ bodyType, diff ] = candidate;
                const subCategory = bodyType.hpCategory[1] ? `-${bodyType.hpCategory[1]}` : "";
                return (
                  <li key={i}> {bodyType.label}【{bodyType.hpCategory[0]}{subCategory}】（理論値誤差: {diff.toFixed(1)}） </li>
                )
              })
            }
          </ul>
          <OutputNote>
            の可能性があります。
          </OutputNote>
        </OutputContent>
      </OutputArea>
      
    </Tab>
  )
}

export { Exp };