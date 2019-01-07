import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {SharedModule} from '../../shared/shared.module';
import {MainDataTableComponent} from '../../shared/main-data-table/main-data-table.component';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {FormatNumberPipe} from '../../shared/format-number.pipe';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
@NgModule({
  declarations: [CustomerComponent, AddEditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  entryComponents: [CustomerComponent, AddEditCustomerComponent]
})
export class CustomerModule { }
