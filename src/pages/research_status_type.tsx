import Head from "next/head";

import styles from "../../styles/research_status_type.module.css";
import { NumberInput, Select, Group, GroupLabel } from "../components/research_status_type/input";
import { PatternContainer, PatternImage, PatternName, BodyPattern } from "../components/research_status_type/input/pattern";

type BodyPattern = {
  label: string,
  image: string
}

const bodyPatterns = new Map<string, BodyPattern>([
  ["none", { label: "なし", image: "" }],
  ["tiger", { label: "虎柄", image: "" }],
  ["diamond", { label: "ダイヤ柄", image: "" }],
  ["brick", { label: "レンガ柄", image: "" }],
]);

const ResearchStatusType = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title> 体格判断ガチで </title>
      </Head>
      <section className={styles.tab}>
        <p className={styles.tabName}>
          STATUS
        </p>
        <form className={styles.input}>
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
                    <BodyPattern key={i}>
                      <PatternImage />
                      <PatternName> {pattern.label}  </PatternName>
                    </BodyPattern>
                  );
                })
              }
            </PatternContainer>
          </Group>
        </form>

        <section className={styles.output}>
          <p className={styles.outputLabel}> OUTPUT / STATUS </p>
          <div className={styles.outputContent}>
            <p className={styles.outputNote}> レア柄「虎柄」が設定されたため、すばやさの基礎値を 0 に補正しました。 </p>
          </div>
        </section>

      </section>

      <section className={styles.tab}>
        <p className={styles.tabName}>
          EXP
        </p>
        <form className={styles.input}>
          <Group>
            <GroupLabel> データ </GroupLabel>
            <p>
              <NumberInput id="exp-lv" min={1} max={500} placeholder="現在のLv" required={true} />
            </p>
            <p>
              <NumberInput id="exp-value" min={0} placeholder="累計EXP" required={true} className={styles.expInput} />
              <NumberInput id="exp-next-lv" min={0} placeholder="次のLvに必要なEXP" required={true} className={styles.expInput}/>
            </p>
              
            <Select>
              <option> チューリップ </option>
            </Select>
          </Group>
        </form>

        <section className={styles.output}>
          <p className={styles.outputLabel}> OUTPUT / EXP </p>
          <div className={styles.outputContent}>

          </div>
        </section>
        
      </section>

      <section className={styles.tab}>
        <p className={styles.tabName}>
          SHAPE
        </p>
        <form className={styles.input}>
          <Group>
            <GroupLabel> 画像 </GroupLabel>
          </Group>
          <Group>
            <GroupLabel> 比較対象の体格 </GroupLabel>

            <Select>
              <option> 回避0 </option>
            </Select>
          </Group>
        </form>

        <section className={styles.output}>
          <p className={styles.outputLabel}> OUTPUT / SHAPE </p>
          <div className={styles.outputContent}>

          </div>
        </section>
        
      </section>

    </div>
  )
}

export default ResearchStatusType;