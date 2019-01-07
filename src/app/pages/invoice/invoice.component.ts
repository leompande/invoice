import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddEditInvoiceComponent} from './add-edit-invoice/add-edit-invoice.component';
import {Invoice, newInvoice} from '../../store/invoice/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[];

  constructor(public dialog: MatDialog) {
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
