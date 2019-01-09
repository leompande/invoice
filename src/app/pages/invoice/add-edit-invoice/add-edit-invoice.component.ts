import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Invoice} from '../../../store/invoice/invoice.model';
import {select, Store} from '@ngrx/store';
import {getAllCustomer} from '../../../store/customer/customer.selector';
import {ApplicationState} from '../../../store';
import {Customer} from '../../../store/customer/customer.model';

@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.css']
})
export class AddEditInvoiceComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: true,
    text: 'Customers',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: 'myclass custom-class'
  };

  constructor(
    public dialogRef: MatDialogRef<AddEditInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { object: Invoice, objects: Invoice[] },
    private store: Store<ApplicationState>
  ) {
    this.store.pipe(select(getAllCustomer)).subscribe((customers) => {
      this.dropdownList = customers.map((customer) => {
        return {id: customer.id, itemName: customer.customer_name};
      });
    });
  }

  ngOnInit() {
  }


  onClose() {
    this.dialogRef.close();
  }


  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }


}
