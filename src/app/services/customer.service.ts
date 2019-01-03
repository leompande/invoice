import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseService} from './firebase.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CustomerService {
  customers = firebase.firestore().collection('customers');

  constructor(private firebaseService: FirebaseService) {

  }

  getCustomers(): Observable<any> {
    return this.firebaseService.getAll(this.customers);
  }

  getCustomerById(id): Observable<any> {
    return this.firebaseService.getById(this.customers, id);
  }

  saveCustomer(data): Observable<any> {
    return this.firebaseService.post(this.customers, data);
  }


  updateCustomer(id, data): Observable<any> {
    return this.firebaseService.update(this.customers, id, data);
  }

  deleteCustomer(id): Observable<any> {
    return this.firebaseService.delete(this.customers, id);
  }
}
