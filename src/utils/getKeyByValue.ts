/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const getKeyByValue = <T extends Record<any, any>>(
  object: T,
  value: T[keyof T]
): keyof T => {
  return Object.keys(object).find((key) => object[key] === value)
}
