const toShortNum = (n: number) => {
  if (n < 1e3) return n;
  if (n >= 1e3) return +(n / 1e3).toFixed(1) + "k";
};
export default toShortNum;
