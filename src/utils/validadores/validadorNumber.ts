/**
 * 
 * @param number un objeto de cualquier tipo
 * @returns retorna un number o un error en caso de que no sea un number el parametro de entrada
 */
export function validadorNumbre(number: any): number {
  if (typeof number == "number") {
    return number;
  }
  throw new Error(`${number} no es un numero`);
}
