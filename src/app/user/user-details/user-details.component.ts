import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Observable } from "rxjs";
import { map, subscribeOn } from "rxjs/operators";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  _user: Observable<User>;
  idUser: string;
  userName : string;
  constructor(private route: ActivatedRoute,
  private userService: UserService,
  private router: Router,
  public dialog: MatDialog
  ) { }

  ngOnInit() {
   
    //Load data with resolver
    this._user = this.route.data.pipe(map(userData => <User>userData.user));
  
    //Load data directly
    // this.route.paramMap.
    // subscribe(params => {        
    //   const id: string = params.get('id');      
    //   this._user = this.userService.getUser(id);
    // });   

  }

  deleteUser(id){
    
    this._user.pipe(take(1)).subscribe(user => this.userName = user.name);

    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {name: this.userName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
          this.userService.deleteUser(id);
          this.router.navigate(['/user']);
      }
    });
  }

}
