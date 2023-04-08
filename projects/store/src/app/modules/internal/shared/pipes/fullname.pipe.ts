import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'projects/shared-lib/src/lib/models/user';


@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(user: User): unknown {
    if (!user || !user.fullname) return '-';
    return `${user.fullname || '-'} `;
  }
}
