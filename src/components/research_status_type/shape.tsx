import { Select, Group, GroupLabel } from "./input";
import { InputArea, OutputArea, AreaTitle, Tab, OutputContent } from "./tabs";

const Shape = () => {
  return (
    <Tab>
      <InputArea>
        <AreaTitle> SHAPE </AreaTitle>
        <Group>
          <GroupLabel> 画像 </GroupLabel>
        </Group>
        <Group>
          <GroupLabel> 比較対象の体格 </GroupLabel>

          <Select>
            <optgroup> 回避0 </optgroup>
          </Select>
        </Group>
      </InputArea>

      <OutputArea>
        <AreaTitle> OUTPUT / SHAPE </AreaTitle>
        <OutputContent>

        </OutputContent>
      </OutputArea>
    </Tab>
  );
}

export { Shape };