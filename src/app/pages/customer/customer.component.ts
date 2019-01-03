import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store';
import {GetCustomers} from '../../store/customer/customer.actions';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    console.log("We here nigga");
    this.store.dispatch(new GetCustomers());
  }

}
