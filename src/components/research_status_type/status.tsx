import { NumberInput, Select, Group, GroupLabel } from "./input";
import { PatternContainer, PatternImage, PatternName, BodyPattern } from "./input/pattern";
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

type PatternChosenProps = {
  isChosen: boolean,
  children?: React.ReactNode
}

const PatternChosen: React.VFC<PatternChosenProps> = ({ isChosen, children }) => {
  return (
    <BodyPattern>
      { children }    
    </BodyPattern>
  )
}

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
          <PatternContainer>
            {
              Array.from(bodyPatterns.values()).map((pattern, i) => {
                return (
                  <BodyPattern key={i} 
                          onClick={() => { setChosenPattern(pattern.label) }} 
                          className={clsx(pattern.label === chosenPattern && styles.chosenPattern)}>
                    <PatternImage />
                    <PatternName> {pattern.label}  </PatternName>
                  </BodyPattern>
                );
              })
            }
          </PatternContainer>
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