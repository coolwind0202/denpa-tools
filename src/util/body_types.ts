import type { RatioLabel } from "./exp_ratio";
import type { Eva } from "./eva";
type BodyType = {
  eva: Eva
  label: string
  hpCategory: [number, number | null]
  expRatio: RatioLabel
}

// ステータス関数の決定に必要なのは、アンテナ、体格（BodyType）、Lv、世代、ドーピング値
// -> 体格だけで決定しかねるので、ステータス関数を体格にもたせるべきでない。
// BodyType やその他の情報を受け取ってステータス関数を返す関数を別途作る。

/*
  ここにこれ書くのおかしくね？
*/

const bodyTypes = new Map<Eva, BodyType[]>([
  [0, 
    [
      { 
        eva: 0,
        hpCategory: [1, null], 
        label: "最大型",
        expRatio: "A",
      },
      {
        eva: 0,
        hpCategory: [2, null],
        label: "準大",
        expRatio: "B",
      },
      {
        eva: 0,
        hpCategory: [3, null],
        label: "中間",
        expRatio: "B",
      },
      {
        eva: 0,
        hpCategory: [4, null],
        label: "準速",
        expRatio: "C",
      },
      {
        eva: 0,
        hpCategory: [5, null],
        label: "最速",
        expRatio: "B",
      },
    ]
  ],
  [3, 
    [
      {
        eva: 3,
        hpCategory: [2, null],
        label: "最大型",
        expRatio: "B"
      },
      {
        eva: 3,
        hpCategory: [3, 1],
        label: "準大",
        expRatio: "C"
      },
      {
        eva: 3,
        hpCategory: [3, 2],
        label: "準大",
        expRatio: "D"
      },
      {
        eva: 3,
        hpCategory: [4, 1],
        label: "準準大",
        expRatio: "C"
      },
      {
        eva: 3,
        hpCategory: [4, 2],
        label: "準準大",
        expRatio: "D"
      },
      {
        eva: 3,
        hpCategory: [5, 1],
        label: "準準速",
        expRatio: "D"
      },
      {
        eva: 3,
        hpCategory: [5, 2],
        label: "準準速",
        expRatio: "C"
      },
      {
        eva: 3,
        hpCategory: [6, 1],
        label: "準速",
        expRatio: "D"
      },
      {
        eva: 3,
        hpCategory: [6, 2],
        label: "準速",
        expRatio: "C"
      },
      {
        eva: 3,
        hpCategory: [7, null],
        label: "最速",
        expRatio: "F"
      },
    ]
  ],
  [6,
    [
      { 
        eva: 6,
        hpCategory: [4, null], 
        label: "最大型",
        expRatio: "E",
      },
      {
        eva: 6,
        hpCategory: [5, 1],
        label: "準大",
        expRatio: "F",
      },
      {
        eva: 6,
        hpCategory: [5, 2],
        label: "準大",
        expRatio: "E",
      },
      {
        eva: 6,
        hpCategory: [6, 1],
        label: "中間",
        expRatio: "F",
      },
      {
        eva: 6,
        hpCategory: [6, 2],
        label: "中間",
        expRatio: "E",
      },
      {
        eva: 6,
        hpCategory: [6, 3],
        label: "中間",
        expRatio: "E",
      },
      {
        eva: 6,
        hpCategory: [7, null],
        label: "準速",
        expRatio: "F",
      },
      {
        eva: 0,
        hpCategory: [8, null],
        label: "最速",
        expRatio: "F",
      },
    ]
  ],
  [10,
    [
      {
        eva: 10,
        label: "最大型",
        hpCategory: [6, null],
        expRatio: "G"
      },
      {
        eva: 10,
        label: "中間",
        hpCategory: [7, null],
        expRatio: "G"
      },
      {
        eva: 10,
        label: "最速",
        hpCategory: [9, null],
        expRatio: "H" /* あってる？ */
      },
    ]
  ],
  [15,
    [
      {
        eva: 15,
        label: "最大型",
        hpCategory: [8, null],
        expRatio: "G"
      },
      {
        eva: 15,
        label: "中間",
        hpCategory: [9, null],
        expRatio: "G"
      },
      {
        eva: 15,
        label: "最速",
        hpCategory: [10, null],
        expRatio: "G"
      },
    ]
  ]
]);

export { bodyTypes }
export type { BodyType }