import { isArray } from 'lodash';
import { digitalstore } from './messages';

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
