import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseService} from './firebase.service';
import {Observable} from 'rxjs';
import {TrackerService} from './tracker.service';
import {Customer} from '../store/customer/customer.model';
import {ApplicationState} from '../store';
import {Store} from '@ngrx/store';
import {DoneLoadingCustomers} from '../store/customer/customer.actions';

@Injectable({providedIn: 'root'})
export class CustomerService {
  customers = firebase.firestore().collection('customers');

  constructor(private firebaseService: FirebaseService, private tracker: TrackerService, private store: Store<ApplicationState>) {

  }

  getCustomers() {
    const userOrganisationUnit = localStorage.getItem('invoice-user-organisation-unit');

    const customerFieldMapper = {
      id: 'DkWdn6QHxhW',
      customer_name: 'nJFugruGmRK',
      phone_number: 'ha9SNHKRj36',
      email: 'HKsxBSJ85hw',
      address: 'r93RFK5sDxd',
      entry_date: 'mvPi0VD2TMe',
      comments: 'roEpQLLKQZS',
      fax: 'u5jJvTXpCXZ',
    };
    this.tracker.getEvents(userOrganisationUnit, 'trxeOTSaotj').subscribe((data) => {
      const customers: Customer[] = data.map(event => {
        const customer = {};
        event.dataValues.forEach((dataValue: any) => {

          for (const property in customerFieldMapper) {
            if (customerFieldMapper[property] === dataValue.dataElement) {
              customer[property] = dataValue.value;
            }
          }

        });
        customer['id'] = event.event;
        return customer;
      });
      console.log(customers);
      this.store.dispatch(new DoneLoadingCustomers({customers}));
    }, (error) => {
      console.log(error);
    });
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
