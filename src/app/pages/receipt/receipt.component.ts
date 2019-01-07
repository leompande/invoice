import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddEditReceiptComponent} from './add-edit-receipt/add-edit-receipt.component';
import {newReceipt, Receipt} from '../../store/receipt/receipt.model';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  receipts: Receipt[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }


  addItem() {
    const dialogRef = this.dialog.open(AddEditReceiptComponent, {
      width: '95%',
      disableClose: true,
      data: {
        object: {...newReceipt, id: ''},
        objects: this.receipts
      },
      panelClass: 'formFieldWidth400'
    });
  }


}
