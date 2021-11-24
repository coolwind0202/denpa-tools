import { Select, Group, GroupLabel } from "./input";
import { InputArea, OutputArea, AreaTitle, Tab, OutputContent, OutputNote } from "./tabs";

import { BodyType, bodyTypes } from "../../util/body_types";
import { FormEventHandler, useState } from "react";
import { useImage } from "../../hooks/use_image";

import styles from "../../styles/research_status_type/shape.module.css";

const Shape = () => {
  const [ chosenBodyType, setChosenBodyType ] = useState<BodyType>();
  const [ imgUrl, setImgFile ] = useImage();

  const handleReset: FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    console.log(e);
    setImgFile(null);
  }

  return (
    <Tab>
      <InputArea>
        <AreaTitle> SHAPE </AreaTitle>
        <Group>
          <GroupLabel> 画像 </GroupLabel>
          <p>
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => setImgFile(e.currentTarget.files?.[0])}/>
          </p>
          <p>
            <input type="reset" onClick={handleReset} />
          </p>
        </Group>
        <Group>
          <GroupLabel> 比較対象の体格 </GroupLabel>

          <Select>
            <option defaultValue="true" onClick={() => setChosenBodyType(undefined)}> 未選択 </option>
            {
              Array.from(bodyTypes.entries()).map(([eva, types], n) => (
                <optgroup key={n} label={`回避${eva}`}>
                  {
                    types.map((type, m) => (
                      <option key={`${n} ${m}`} onClick={() => setChosenBodyType(type)}> 
                        { type.label }{ type.hpCategory[1] !== null && `-${type.hpCategory[1]} `} 
                      </option>
                    ))
                  }
                </optgroup>
              ))
            } 
          </Select>
        </Group>
      </InputArea>

      <OutputArea>
        <AreaTitle> OUTPUT / SHAPE </AreaTitle>
        <OutputContent>
            <OutputNote>
              { 
                chosenBodyType ? (
                  <>
                    回避 { chosenBodyType.eva } { chosenBodyType.label }の画像を重ねて表示します。
                  </>
                ): (
                  <>
                    体格を選択してください。
                  </>
                )} 
            </OutputNote>

            <div className={styles.screen}>
              <img src="body_line.png" className={styles.bodyLine} />
              <img src={imgUrl} className={styles.img} />
            </div>
        </OutputContent>
      </OutputArea>
    </Tab>
  );
}

export { Shape };