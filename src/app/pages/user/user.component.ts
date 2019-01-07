import { Component, OnInit } from '@angular/core';
import {AddEditInvoiceComponent} from '../invoice/add-edit-invoice/add-edit-invoice.component';
import {newInvoice} from '../../store/invoice/invoice.model';
import {MatDialog} from '@angular/material';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {newUser, User} from '../../store/user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  addItem() {
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '95%',
      disableClose: true,
      data: {
        object: {...newUser, id: ''},
        objects: this.users
      },
      panelClass: 'formFieldWidth400'
    });
  }

}
