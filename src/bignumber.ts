import BigNumber from "bignumber.js";

export function convertNumberToString(value: string | number) {
  return new BigNumber(`${value}`).toString();
}

export function convertStringToNumber(value: string | number) {
  return new BigNumber(`${value}`).toNumber();
}

export function multiply(
  numberOne: string | number,
  numberTwo: string | number
) {
  return new BigNumber(`${numberOne}`)
    .times(new BigNumber(`${numberTwo}`))
    .toString();
}

export function divide(numberOne: string | number, numberTwo: string | number) {
  return new BigNumber(`${numberOne}`)
    .dividedBy(new BigNumber(`${numberTwo}`))
    .toString();
}

export function formatFixedDecimals(value: string | number, decimals: number) {
  const _value = convertNumberToString(value);
  const result = new BigNumber(
    new BigNumber(_value).toFixed(decimals)
  ).toString();
  return result;
}
