export function trimQuery(value:string){
  if(value && typeof value === 'string') return value.trim();
  return '';
}

export const sortAlphaNumeric =(a:string | number, b:string |number)=>{
  a=typeof a==='string'? a.toLowerCase():a.toString();
  b=typeof b==='string'? b.toLowerCase():b.toString();

  return a.localeCompare(b);

};