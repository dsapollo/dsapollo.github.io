import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarName',
})
export class AvatarNamePipe implements PipeTransform {
  getFirstChar(text: string | undefined) {
    return ((text || '').charAt(0) || '').toUpperCase();
  }

  transform(person: Person, ...args: unknown[]): unknown {
    if (!person || (!person.firstName && !person.lastName && !person.fullName))
      return '-';
    if (person.fullName) {
      const names = person.fullName.split(' ');
      const avatarName = names.reduce((res: string, text, index) => {
        if (index === 0 || index === names.length - 1)
          res += this.getFirstChar(text);
        return res;
      }, '');
      return avatarName;
    }

    if (person.firstName || person.lastName) {
      return `${this.getFirstChar(person.firstName)}${this.getFirstChar(
        person.lastName
      )}`;
    }
    return '-';
  }
}
interface Person {
  firstName: string;
  lastName: string;
  fullName: string;
}
