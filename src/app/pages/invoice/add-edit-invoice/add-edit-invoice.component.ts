import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Invoice} from '../../../store/invoice/invoice.model';

@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.css']
})
export class AddEditInvoiceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEditInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { object: Invoice, objects: Invoice[] },
  ) { }

  ngOnInit() {
  }


  onClose(){
    this.dialogRef.close();
  }

}
