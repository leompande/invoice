import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceRoutingModule} from './invoice-routing.module';
import {InvoiceComponent} from './invoice.component';
import {SharedModule} from '../../shared/shared.module';
import {MyCustomMaterialModule} from '../../shared/material.module';
import { AddEditInvoiceComponent } from './add-edit-invoice/add-edit-invoice.component';

@NgModule({
  declarations: [InvoiceComponent, AddEditInvoiceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyCustomMaterialModule,
    InvoiceRoutingModule],
  entryComponents: [InvoiceComponent, AddEditInvoiceComponent]
})
export class InvoiceModule {
}
