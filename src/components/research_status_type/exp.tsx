import { NumberInput, Select, Group, GroupLabel } from "./input";
import { InputArea, OutputArea, AreaTitle, Tab, OutputContent, OutputNote } from "./tabs";

import styles from "../../styles/research_status_type/exp.module.css";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { convertExp, ratioLabels } from "../../util/exp_ratio";
import { BodyType, bodyTypes } from "../../util/body_types";

import data from "../../../public/exp.json";

import { useExp } from "../../hooks/use_exp";
import { Eva, evaRates, isEva } from "../../util/eva";

const Exp = () => {
  const [ eva, setEva ] = useState<Eva>(0);
  const [ lv, setLv ] = useState<number>(1);
  const [ nextLvExp, setTotal, setNext ] = useExp();

  /*
    diff が同値のものが複数あった場合は？
    -> すべて表示する。
    -> search() で、最大値と同値でないもの以外は切っていい。
    -> 参考値として diff の値を表示したいので、searchから diff も渡す。
  */

  const getValue = (e: FormEvent<HTMLInputElement>) => {
    return e.currentTarget.valueAsNumber || 0;
  }

  const search = (lv: number, exp: number, eva: Eva) => {
    const index = lv + 1;
    const baseVal = data.total[index];
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
            
          <Select>
            <option> チューリップ </option>
          </Select>
        </Group>
      </InputArea>

      <OutputArea>
        <AreaTitle> OUTPUT / EXP </AreaTitle>
        <OutputContent>
          <OutputNote>
            個体の次レベル（Lv.{ lv + 1}）到達時の経験値は { nextLvExp } です。
          </OutputNote>
          
          <OutputNote>
            逆算します...
          </OutputNote>

          <ul className={styles.list}>
            { 
              search(lv, nextLvExp, eva).map((candidate, i) => {
                const [ bodyType, diff ] = candidate;
                return (
                  <li> {bodyType.label}【{bodyType.hpCategory[0]}-{bodyType.hpCategory[1] ?? 1}】（誤差: {diff.toFixed(1)}） </li>
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