import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { take } from "rxjs/operators";

@Injectable()
export class UserDetailsResolverService implements Resolve<any>{

  constructor(private userService: UserService){}
  user: Observable<User>;

  resolve(route : ActivatedRouteSnapshot, routeState: RouterStateSnapshot): Observable<User> { 
      const id: string = route.params['id'];      
      this.user = this.userService.getUser(id).pipe(take(1));
      return this.user;
  }
}
