import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, NgControl} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Observable<User[]>;
  user: User = {
    email : '',
    name: '',
    id: ''
  };
  selectedUser: string;
  searchText: string;

  
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {    
    this.users = this.userService.getUsers();

    let firstChild = this.route.firstChild;
    if(firstChild)
      firstChild.params.subscribe(params => {
        this.selectedUser = params['id'];
      });
   
  }

  addUser(formUser: NgForm){
    this.userService.addUser(this.user);  
    formUser.reset();
  }

}
