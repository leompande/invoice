import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../store';
import {GetCustomers} from '../../store/customer/customer.actions';
import {AddEditCustomerComponent} from './add-edit-customer/add-edit-customer.component';
import {Customer, newCustomer} from '../../store/customer/customer.model';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {getAllCustomer} from '../../store/customer/customer.selector';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  loading = true;
  tableConfigurations = {
    tableColumns: [
      {name: 'customer_name', label: 'Customer Name'},
      {name: 'address', label: 'Address'},
      {name: 'contact_person', label: 'Contact Person'},
      {name: 'email', label: 'Email'},
      {name: 'phone_number', label: 'Phone Number'},
      {name: 'entry_date', label: 'Entry Date'},
      {name: 'fax', label: 'Fax'},
      {name: 'comments', label: 'Comments'}
    ],
    tableCaption: '',
    tableNotifications: '',
    showSearch: true,
    showBorder: true,
    allowPagination: true,
    actionIcons: {edit: true, delete: false, more: false, print: false},
    doneLoading: false,
    deleting: {},
    empty_msg: 'No customers found'
  };

  constructor(public dialog: MatDialog, private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetCustomers());
    this.store.pipe(select(getAllCustomer)).subscribe((customers) => {
      this.customers = customers;
      this.loading = false;
    });


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
