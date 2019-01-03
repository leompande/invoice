import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseService} from './firebase.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ReceiptService {
  receipts = firebase.firestore().collection('receipts');

  constructor(private firebaseService: FirebaseService) {

  }

  getReceipts(): Observable<any> {
    return this.firebaseService.getAll(this.receipts);
  }

  getReceiptById(id): Observable<any> {
    return this.firebaseService.getById(this.receipts, id);
  }

  saveReceipt(data): Observable<any> {
    return this.firebaseService.post(this.receipts, data);
  }


  updateReceipt(id, data): Observable<any> {
    return this.firebaseService.update(this.receipts, id, data);
  }

  deleteReceipt(id): Observable<any> {
    return this.firebaseService.delete(this.receipts, id);
  }
}
