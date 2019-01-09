import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddEditInvoiceComponent} from './add-edit-invoice/add-edit-invoice.component';
import {Invoice, newInvoice} from '../../store/invoice/invoice.model';
import {GetCustomers} from '../../store/customer/customer.actions';
import {ApplicationState} from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[];

  constructor(public dialog: MatDialog, private store: Store<ApplicationState>) {
    this.store.dispatch(new GetCustomers());
  }

  ngOnInit() {
  }

  addItem() {
    const dialogRef = this.dialog.open(AddEditInvoiceComponent, {
      width: '95%',
      disableClose: true,
      data: {
        object: {...newInvoice, id: ''},
        objects: this.invoices
      },
      panelClass: 'formFieldWidth400'
    });
  }

  onDelete(objectId) {

  }

  onUpdate(objectId) {
    //   this.current_object = <LearningMaterial>{...this.learningMaterialEntities[objectId]};
    //   const dialogRef = this.dialog.open(AddEditSingleTopicComponent, {
    //     width: '95%',
    //     disableClose: true,
    //     data: {
    //       object: this.current_object,
    //       objects: this.learningMaterials,
    //       group: this.group$
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.current_object = null;
    //   });
  }

}
