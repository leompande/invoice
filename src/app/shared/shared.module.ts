import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCustomMaterialModule} from './material.module';
import {MainDataTableComponent} from './main-data-table/main-data-table.component';
import {LoaderComponent} from './loader/loader.component';
import {FormatNumberPipe} from './format-number.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaveAreaComponent} from './save-area/save-area.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [

    MainDataTableComponent,
    LoaderComponent,
    FormatNumberPipe,
    SaveAreaComponent
  ],
  imports: [
    CommonModule,
    MyCustomMaterialModule,

    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ],
  exports: [
    MyCustomMaterialModule,
    AngularMultiSelectModule,
    SaveAreaComponent,
    MainDataTableComponent,
    LoaderComponent,
    FormatNumberPipe,


    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: []
})

export class SharedModule {
}
