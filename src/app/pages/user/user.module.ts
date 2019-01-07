import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {SharedModule} from '../../shared/shared.module';
import {CustomerComponent} from '../customer/customer.component';
import {MainDataTableComponent} from '../../shared/main-data-table/main-data-table.component';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {FormatNumberPipe} from '../../shared/format-number.pipe';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
@NgModule({
  declarations: [UserComponent, AddEditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  entryComponents: [UserComponent, AddEditUserComponent]
})
export class UserModule { }
