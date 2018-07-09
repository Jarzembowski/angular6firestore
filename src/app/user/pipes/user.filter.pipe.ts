import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../model/user';

@Pipe({
  name: 'UserFilter'
})
export class UserFilter implements PipeTransform {
    transform(items: User[], searchText: string): User[] {

    if(!items) return [];
    if(!searchText) return items;

    return items.filter( it => {
      return it.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
   }
}