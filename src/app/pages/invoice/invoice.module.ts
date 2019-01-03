import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoiceRoutingModule} from './invoice-routing.module';
import {InvoiceComponent} from './invoice.component';
import {MyCustomMaterialModule} from '../../shared/material.module';
@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MyCustomMaterialModule
  ],
  entryComponents: [InvoiceComponent]
})
export class InvoiceModule { }
