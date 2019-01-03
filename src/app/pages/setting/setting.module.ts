import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingRoutingModule} from './setting-routing.module';
import {SettingComponent} from './setting.component';
import {MyCustomMaterialModule} from '../../shared/material.module';
@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MyCustomMaterialModule
  ],
  entryComponents: [SettingComponent]
})
export class SettingModule { }
