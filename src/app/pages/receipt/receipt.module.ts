import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReceiptRoutingModule} from './receipt-routing.module';
import {ReceiptComponent} from './receipt.component';
import {MyCustomMaterialModule} from '../../shared/material.module';
@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    ReceiptRoutingModule,
    MyCustomMaterialModule
  ],
  entryComponents: [ReceiptComponent]
})
export class ReceiptModule { }
