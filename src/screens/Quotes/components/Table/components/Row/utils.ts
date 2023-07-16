export const roundValue = (value: string) => Math.round((parseInt(value) + Number.EPSILON) * 100) / 100;
