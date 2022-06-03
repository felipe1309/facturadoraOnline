/**
 * 
 * @param string un objeto de cualquier tipo
 * @returns retorna un string o un error en caso de que no sea un string el parametro de entrada
 */
export function validadorString(string: any): string {
  if (typeof string === "string") {
    return string;
  }
  throw new Error(`${string} no es un string`);
}
/**
 * 
 * @param lista un objeto de cualquier tipo
 * @returns retorna una lista de string o un error en caso de que no sea una lista de string el parametro de entrada
 */
export const validadorListaString = (lista: any): string[] => {
  if (Array.isArray(lista)) {
    lista.forEach((string:any)=>{
      if (typeof string !=="string") {
        throw new Error(`${string} no es un string`);
      }
    })
  }
  return lista as string[];
}