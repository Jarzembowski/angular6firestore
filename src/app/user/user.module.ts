import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsResolverService } from './resolvers/user-details-resolver.service';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import {UserFilter} from './pipes/user.filter.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    ConfirmComponent,
    UserFilter
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    UserRoutingModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [UserDetailsResolverService]
})
export class UserModule { }
