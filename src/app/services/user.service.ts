import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database: AngularFirestore) { }
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDocument: AngularFirestoreDocument<User>;

  // updateUser(user: User){
  //   this.userDocument = this.database.doc(environment.firebaseDocs.user);
  //   this.userDocument.update(user);
  // }

  addUser(user: User){
    this.usersCollection = this.database.collection('/users'); 
    this.usersCollection.add(user);
  }

  getUsers(){

    this.usersCollection = this.database.collection('/users');    
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    return this.users;
  }

  getUser(id){
    this.userDocument = this.database.doc('users/' + id);  
    return  this.userDocument.snapshotChanges().pipe(
      map(actions => {
        const data = actions.payload.data() as User;
        data.id = actions.payload.id;
        return data;
      })
    );

  }

  deleteUser(id){
    this.userDocument = this.database.doc('users/' + id);
    this.userDocument.delete();      
  }

}
