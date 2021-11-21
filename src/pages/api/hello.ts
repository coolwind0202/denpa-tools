// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFile, writeFile } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  readFile("public/equips_spare.json", (e, d) => {
    if (e) {
      console.log(e);
      return;
    }
    const data = JSON.parse(d.toString());

    const convert: any = {
      categories: []
    };

    for (const partName in data) {
      const equips = data[partName];
      const category: any  = {
        "name": partName,
        "equips": []
      };

      for (const equipName in equips) {
        const effects = equips[equipName];

        const obj: any = {
          "name": equipName,
          "effects": []
        };
        for (const effectName in effects) {
          let value = effects[effectName];
          if (typeof value === "string") value = Number(value.replaceAll(/[^(0-9 | .)]/g, ""));
          obj.effects.push({
            "name": effectName,
            value
          });
        }

        category.equips.push(obj);
      }
      convert.categories.push(category)
    }
    writeFile("public/equips_2.json", JSON.stringify(convert), () => {});
    // console.log(JSON.stringify(convert))
  })
  res.status(200).json({ name: 'John Doe' })
}
