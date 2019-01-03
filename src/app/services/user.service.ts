import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseService} from './firebase.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  users = firebase.firestore().collection('users');

  constructor(private firebaseService: FirebaseService) {

  }

  getUsers(): Observable<any> {
    return this.firebaseService.getAll(this.users);
  }

  getUserById(id): Observable<any> {
    return this.firebaseService.getById(this.users, id);
  }

  saveUser(data): Observable<any> {
    return this.firebaseService.post(this.users, data);
  }


  updateUser(id, data): Observable<any> {
    return this.firebaseService.update(this.users, id, data);
  }

  deleteUser(id): Observable<any> {
    return this.firebaseService.delete(this.users, id);
  }
}
