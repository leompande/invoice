import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Receipt} from '../../../store/receipt/receipt.model';
import {Customer} from '../../../store/customer/customer.model';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { object: Customer, objects: Customer[] },
  ) {
  }

  ngOnInit() {
  }


  onClose(errorOccured: boolean = false) {
    this.dialogRef.close(errorOccured);
  }

}
