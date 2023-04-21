import { isArray } from 'lodash';
import { digitalstore } from './messages';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import moment from 'moment';

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


export function trimQuery(value:string){
  if(value && typeof value === 'string') return value.trim();
  return '';
}




export const sortAlphaNumeric =(a:string | number, b:string |number)=>{
  a=typeof a==='string'? a.toLowerCase():a.toString();
  b=typeof b==='string'? b.toLowerCase():b.toString();

  return a.localeCompare(b);

};

export const parseOutputDate =(
  date:NgbDate |null,
  format:string ='YYYY-MM_DD'
) =>{
  if(!date) return null;

  return moment({
    day:date.day,
    month:date.month -1,
    year:date.year,

  }).format(format);
};

export const parseOutputDateTime =(
  date:NgbDate,
  time:NgbTime,
  format:string='YYYY-MM-DDTHH:mm:ss'
)=>{
  if(!date) return null;

  return moment({
    day:date.day,
    month:date.month -1,
    year:date.year,
    hour:time.hour,
    minute:time.minute,

  }).format(format);
};

export const parseInputDate =(date:any):NgbDateStruct |null =>{
  if(!date) return null;
  var d =new Date(date);

  return{
    day:d.getDate(),
    month:d.getMonth()+1,
    year:d.getFullYear(),
  };
};

// export const formatDate =(date:any,format ='DD/MM/YYYY')={
//   if(!date) return null;

//   return moment(date).format(format);
// };