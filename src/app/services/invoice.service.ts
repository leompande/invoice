import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseService} from './firebase.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class InvoiceService {
  invoices = firebase.firestore().collection('invoices');

  constructor(private firebaseService: FirebaseService) {

  }

  getInvoices(): Observable<any> {
    return this.firebaseService.getAll(this.invoices);
  }

  getInvoiceById(id): Observable<any> {
    return this.firebaseService.getById(this.invoices, id);
  }

  saveInvoice(data): Observable<any> {
    return this.firebaseService.post(this.invoices, data);
  }


  updateInvoice(id, data): Observable<any> {
    return this.firebaseService.update(this.invoices, id, data);
  }

  deleteInvoice(id): Observable<any> {
    return this.firebaseService.delete(this.invoices, id);
  }
}
