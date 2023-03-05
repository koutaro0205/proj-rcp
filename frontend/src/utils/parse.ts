export const safeParseInt = (defaultNumber: number, input: string | number) => {
  const num = typeof input === 'string' ? parseInt(input, 10) : Number(input);
  if (Number.isNaN(num)) {
    return defaultNumber; // 入力が NaN の場合に デフォルト値 を返す
  }
  return num;
};
