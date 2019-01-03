import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseService} from './firebase.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PaymentService {
  payments = firebase.firestore().collection('payments');

  constructor(private firebaseService: FirebaseService) {

  }

  async getPayments() {
    const data = await this.firebaseService.getAll(this.payments);
    return this.firebaseService.getAll(this.payments);
  }

  async getPaymentById(id) {
    return this.firebaseService.getById(this.payments, id);
  }

  async savePayment(data) {
    return this.firebaseService.post(this.payments, data);
  }

  async updatePayment(id, data) {
    return this.firebaseService.update(this.payments, id, data);
  }

  async deletePayment(id) {
    return this.firebaseService.delete(this.payments, id);
  }
}
