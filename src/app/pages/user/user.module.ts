import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {MyCustomMaterialModule} from '../../shared/material.module';
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MyCustomMaterialModule
  ],
  entryComponents: [UserComponent]
})
export class UserModule { }
