const patternNames = ["なし", "虎柄", "ダイヤ柄", "レンガ柄"] as const;
type PatternName = typeof patternNames[number];

type BodyPattern = {
  label: PatternName,
  svgID: string
}

const bodyPatterns = new Map<string, BodyPattern>([
  ["none", { label: "なし", svgID: "" }],
  ["tiger", { label: "虎柄", svgID: "tiger" }],
  ["diamond", { label: "ダイヤ柄", svgID: "diamond" }],
  ["brick", { label: "レンガ柄", svgID: "brick" }],
]);

export { bodyPatterns, patternNames };
export type { PatternName };