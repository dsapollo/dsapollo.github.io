import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(user: User): unknown {
    if (!user || !user.name) return '-';
    return `${user.name || ''} ${user.name || ''}`;
  }
}
