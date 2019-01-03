import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {MyCustomMaterialModule} from '../../shared/material.module';
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MyCustomMaterialModule
  ],
  entryComponents: [CustomerComponent]
})
export class CustomerModule { }
