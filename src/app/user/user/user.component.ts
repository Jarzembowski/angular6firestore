import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, NgControl, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Observable<User[]>;
  userForm : FormGroup;
  selectedUser: string;
  searchText: string;
  emailteste: Observable<any>;
  
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {    
  
    this.userForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email], this.emailAlreadyinUse)
    });

    this.users = this.userService.getUsers();
    let firstChild = this.route.firstChild;
    if(firstChild)
      firstChild.params.subscribe(params => {
        this.selectedUser = params['id'];
      });
   
  }

  addUser(){    
    let user: User;
    user = <User>this.userForm.value;
    this.userService.addUser(user);  
    this.userForm.reset();
  }

  emailAlreadyinUse = (email: FormControl) => {

     return this.userService.checkEmailExists(email.value).pipe(
     take(1),
     map(
       retorno => {
         return retorno.length > 0 ? { 'emailInUse': true} : null;
       }
     )
   );    

 }

}
