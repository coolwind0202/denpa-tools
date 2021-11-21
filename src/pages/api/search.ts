// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { equipSchema, SchemaType } from '../../util/schema'
import data from "../../../public/equips.json";

type RequestData = {
  [key in string]: InputValue
}

type Effect = {
  name: string,
  value: boolean | number;
}

type Equip = {
  name: string
  effects: Effect[]
}

const parts = ["ふく", "かお", "くび", "うで", "せなか", "あし"] as const;
type Part = typeof parts[number];

type Category = {
  name: Part
  equips: Equip[]
}

type ResponseData = {
  categories: Category[]
};

const isPart = (s: string): s is Part => {
  return parts.includes(s as Part);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  /*
    JSON を整形する

    -> 装備と、部位を配列にする
       スキーマは下部参照

    その他

    a. 「+」「倍」などの文字を消去する
    b. 数値についている引用符を消去する

    c. 装備の部位名を英語にする？
    d. 効果名を英語にする？
       -> c. d. は可読性と利便性とのトレード

    input: 効果名すべて英語、その他の値は InputValue を満たす
    output: 効果名すべて日本語、その他の値は JSON と同一スキーマを満たす
      
  */
  const body = JSON.parse(req.body) as RequestData;
  const solution: ResponseData = {
    categories: []
  };

  const check = (equip: Equip) => {
    for (const effectName in body) {
      const inputValue = body[effectName];
      const equipEffect = equip.effects.find(effect => effect.name === effectName);

      // 指定されたすべての効果について装備が条件を満たしているか

      if (inputValue.bool) {
        if (equipEffect === undefined) {
          // console.log(equip.name);
          return false;
        }
        // この効果が true であることを期待されているが、装備に指定された効果がないので条件を満たせない

        if (equipEffect.value) {
          // 効果が存在しているので走査を続行
          continue;
        }
        return false;
      }

      if (inputValue.min !== undefined && inputValue.max !== undefined) {
        if (equipEffect === undefined) {
          // 装備に指定された効果がないので、入力値の範囲内にデフォルト値がなければ条件を満たせない
          const getSchema = (): SchemaType | undefined => {
            let solution: SchemaType | undefined = undefined;
            equipSchema.forEach(schema => {
              if (schema.label === effectName) solution = schema
            });
            return solution;
          }

          if (inputValue.min === getSchema()?.min) {
            continue;
          }
          return false;
        }

        if (inputValue.min <= equipEffect.value && equipEffect.value <= inputValue.max) {
          // 効果が存在しており、入力値範囲内に装備効果があるので走査を続行
          continue;
        }
        return false;
      }
      return false;  // 不正入力
    }
    return true;
  }

  for (const category of data.categories) {

    const buf: Equip[] = [];
    for (const equip of category.equips) {
      const isValid = check(equip);
      if (isValid) buf.push(equip);
    }

    if (isPart(category.name))
      solution.categories.push({
        name: category.name,
        equips: buf
      });
  }
  console.log(solution);
  res.status(200).json(solution);

  /*
  res.status(200).json(
    {
      categories: [
        {
          category: "ふく",
          equips: [
            {
              name: "hoge",
              effects: [
                {
                  name: "こうげきりょく",
                  value: 40
                },
                {
                  name: "火こうげき",
                  value: true
                }
              ]
            }
          ]
        }
      ]
    }
  )
  */
}

export type { ResponseData, Category, Equip, Effect };