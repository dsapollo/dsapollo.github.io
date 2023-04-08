import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';


@Pipe({
  name: 'avatarName',
})
export class AvatarNamePipe implements PipeTransform {
  getFirstChar(text: string | undefined) {
    return ((text || '').charAt(0) || '').toUpperCase();
  }

  transform(user: User, ...args: unknown[]): unknown {
    if (!user || (!user.firstname && !user.lastname && !user.fullname))
      return '-';
    if (user.fullname) {
      const names = user.fullname.split(' ');
      const avatarName = names.reduce((res: string, text, index) => {
        if (index === 0 || index === names.length - 1)
          res += this.getFirstChar(text);
        return res;
      }, '');
      return avatarName;
    }

    if (user.firstname || user.lastname) {
      return `${this.getFirstChar(user.firstname)}${this.getFirstChar(
        user.lastname
      )}`;
    }
    return '-';
  }
}
interface Person {
  firstname: string;
  lastname: string;
  fullname: string;
}
