const ratioLabels = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;

type RatioLabel = typeof ratioLabels[number];

const ratios = new Map<RatioLabel, number>([
  ["A", 1],
  ["B", 8631 / 8715],
  ["C", 8547 / 8715],
  ["D", 8463 / 8715],
  ["E", 8380 / 8715],
  ["F", 8296 / 8715],
  ["G", 8212 / 8715],
  ["H", 8128 / 8715]
]);

const convertExp = (exp: number, base: RatioLabel, target: RatioLabel) => {
  const baseRatio = ratios.get(base);
  const targetRatio = ratios.get(target);

  if (baseRatio === undefined || targetRatio === undefined) throw new Error("経験値テーブルの取得に失敗しました。");

  // baseRatio = a / 8715
  // targetRatio = b / 8715
  // c / baseRatio = (c / a) * 8715
  // c / baseRatio * targetRatio = (c / a) * 8715 * (b / 8715) = (b / a) * c
  return exp / baseRatio * targetRatio;
} 

export { ratioLabels, convertExp };
export type { RatioLabel };