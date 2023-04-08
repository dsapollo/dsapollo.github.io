import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';


@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(user: User): unknown {
    if (!user || !user.fullname) return '-';
    return `${user.fullname || '-'} `;
  }
}
