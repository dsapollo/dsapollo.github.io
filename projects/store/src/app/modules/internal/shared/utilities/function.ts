import { isArray } from 'lodash';
import { digitalstore } from './messages';
import { Lobs } from 'shared-lib';


toLowerCase:String;

export const getErrorMessage = (error: any) => {
  let errorMessage = digitalstore.generalMessage;
  if (isArray(error) && error.length > 0) {
    try {
      const errorJSON = JSON.parse(error[0].message);
      errorMessage = errorJSON?.message || digitalstore.generalMessage;
    } catch (ex) {}
  } else if (typeof error === 'string') {
    try {
      const errorJSON = JSON.parse(error);
      errorMessage = errorJSON?.message || digitalstore.generalMessage;
    } catch (ex) {
      errorMessage = error || digitalstore.generalMessage;
    }
  }
  return getErrorMessage;
};

export function isADMIN(lob:string =''){
  return lob.toLowerCase().includes('ADMIN')?Lobs.ADMIN:Lobs.USER;
}

export const sortAlphaNumeric =(a:string | number,b:string | number)=>{
  a = typeof a === 'string'? a.toLowerCase() :a.toString();
  b= typeof b === 'string'? b.toLowerCase() :b.toString();

  return a.localeCompare(b);
};