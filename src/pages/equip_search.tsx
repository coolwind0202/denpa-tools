import type { NextPage } from "next"
import { useState } from "react";
import { JumpTop } from "../components/common/jump_top";
import { Form } from "../components/equip_search/form";
import { Effect, ResponseData } from "./api/search";

const EquipSearch: NextPage = () => {
  const [ result, setResult ] = useState<ResponseData>();
  const onSolved = (response: ResponseData) => {
    setResult(response);
  }

  const effectToString = (effect: Effect) => {
    if (typeof effect.value === "boolean") return effect.name
    else return `${effect.name} ${effect.value}`;
  }
  return (
    <div>
      <JumpTop />
      <h1> 装備検索 </h1>

      <p>
        電波人間の装備を検索することができます。
      </p>

      <Form onSolved={onSolved} />
      {
        result && 
        result.categories.map((category, i) => (
          <section key={i}>
            <h4> { category.name } </h4>
            <table>
              <thead>
                <tr>
                  <td> 装備名 </td>
                  <td> 効果 </td>
                </tr>
              </thead>
              <tbody>
                {
                  category.equips.map((equip, n) => (
                    <tr key={n}>
                      <td>
                        {equip.name}
                      </td>
                      <td>
                        {equip.effects.map(effectToString).join(" / ")}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </section>
        ))
      }
    </div>
  );
}

export default EquipSearch;