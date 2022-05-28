export function validadorNumbre(number: any): number {
  if (typeof number == "number") {
    return number;
  }
  throw new Error(`${number} no es un numero`);
}
