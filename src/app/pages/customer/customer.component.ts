import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store';
import {GetCustomers} from '../../store/customer/customer.actions';
import {AddEditCustomerComponent} from './add-edit-customer/add-edit-customer.component';
import {Customer, newCustomer} from '../../store/customer/customer.model';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  constructor(public dialog: MatDialog, private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCustomers());
  }


  addItem() {
    const dialogRef = this.dialog.open(AddEditCustomerComponent, {
      width: '95%',
      disableClose: true,
      data: {
        object: {...newCustomer, id: ''},
        objects: this.customers
      },
      panelClass: 'formFieldWidth400'
    });
  }



}
