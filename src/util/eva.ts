const evaRates = [0, 3, 6, 10, 15] as const;
type Eva = typeof evaRates[number];

const isEva = (n: number): n is Eva => evaRates.includes(n as Eva);

export { evaRates, isEva };
export type { Eva };