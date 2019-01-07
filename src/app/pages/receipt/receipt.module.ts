import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReceiptRoutingModule} from './receipt-routing.module';
import {ReceiptComponent} from './receipt.component';
import {SharedModule} from '../../shared/shared.module';
import {MyCustomMaterialModule} from '../../shared/material.module';
import {CustomerComponent} from '../customer/customer.component';
import {MainDataTableComponent} from '../../shared/main-data-table/main-data-table.component';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {FormatNumberPipe} from '../../shared/format-number.pipe';
import { AddEditReceiptComponent } from './add-edit-receipt/add-edit-receipt.component';
@NgModule({
  declarations: [ReceiptComponent, AddEditReceiptComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReceiptRoutingModule,
    MyCustomMaterialModule
  ],
  exports: [],
  entryComponents: [ReceiptComponent, AddEditReceiptComponent]
})
export class ReceiptModule { }
