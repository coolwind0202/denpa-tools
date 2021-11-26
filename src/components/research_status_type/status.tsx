import { NumberInput, Select, Group, GroupLabel } from "./input";
import { CardContainer, CardImage, CardName, Card } from "./input/choice_cards";
import { InputArea, OutputArea, AreaTitle, Tab, OutputContent, OutputNote } from "./tabs";
import styles from "../../styles/research_status_type/status.module.css";

import { bodyPatterns } from "../../util/body_patterns";
import { usePattern } from "../../hooks/use_pattern";
import clsx from "clsx";
import { useState } from "react";
import type { PatternName as PatternKind } from "../../util/body_patterns";


/*
  コンポーネントを分割して State を分けるべきか？
*/

const Status = () => {
  const [ chosenPattern, setChosenPattern ] = useState<PatternKind>("なし");
  return (
    <Tab>
      <InputArea>
        <AreaTitle> STATUS </AreaTitle>
        <Group>
          <GroupLabel> ステータス </GroupLabel>
          <p>
            <NumberInput id="status-form-lv" min={1} max={500} placeholder="Lv" required={true} />
          </p>
          <p>
            <NumberInput id="status-form-hp" min={1} max={10000} placeholder="HP" required={true}/>
            <NumberInput id="status-form-atk" min={1} max={10000} placeholder="こうげきりょく" className={styles.atkInput} />
          </p>
          <p>
            <input type="checkbox" id="enable-doping"/> <label htmlFor="enable-doping"> ドーピング値を設定する</label> 
          </p>
        </Group>

        <Group>
          <GroupLabel> アンテナ </GroupLabel>
          <Select>
            <option> なし </option>
            <option> お得系 </option>
            <option> 回復系 </option>
            <option> 治療系 </option>
            <option> 増強系 </option>
            <option> 補助系 </option>
            <option> 攻撃系 </option>
          </Select>
          <Select>
            <option> なし </option>
          </Select>
        </Group>

        <Group>
          <GroupLabel> レア柄 </GroupLabel>
          <CardContainer>
            {
              Array.from(bodyPatterns.values()).map((pattern, i) => {
                return (
                  <Card key={i} 
                          onClick={() => { setChosenPattern(pattern.label) }} 
                          className={clsx(pattern.label === chosenPattern && styles.chosenPattern)}>
                    <CardImage> 
                      <svg className={styles.svg} viewBox="0 0 210 210">
                        <use className={styles.use} fill="#005eac"
                        href={"#all_svg__" + pattern.svgID} />
                      </svg>
                    </CardImage>
                    <CardName> {pattern.label}  </CardName>
                  </Card>
                );
              })
            }
          </CardContainer>
        </Group>
      </InputArea>

      <OutputArea>
        <AreaTitle> OUTPUT / STATUS </AreaTitle>
        <OutputContent>
          <OutputNote> レア柄「虎柄」が設定されたため、すばやさの基礎値を 0 に補正しました。 </OutputNote>
        </OutputContent>
      </OutputArea>

    </Tab>
  );
}

export { Status };