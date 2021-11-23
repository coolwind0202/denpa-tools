const patternNames = ["なし", "虎柄", "ダイヤ柄", "レンガ柄"] as const;
type PatternName = typeof patternNames[number];

type BodyPattern = {
  label: PatternName,
  image: string
}

const bodyPatterns = new Map<string, BodyPattern>([
  ["none", { label: "なし", image: "" }],
  ["tiger", { label: "虎柄", image: "" }],
  ["diamond", { label: "ダイヤ柄", image: "" }],
  ["brick", { label: "レンガ柄", image: "" }],
]);

export { bodyPatterns, patternNames };
export type { PatternName };