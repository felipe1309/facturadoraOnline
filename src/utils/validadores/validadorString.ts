export function validadorString(string: any): string {
  if (typeof string === "string") {
    return string;
  }
  throw new Error(`${string} no es un string`);
}
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