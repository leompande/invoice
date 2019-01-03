import {NgModule} from '@angular/core';
import {
  MatToolbarModule, MatSidenavModule, MatCardModule,
  MatIconModule, MatButtonModule, MatListModule,
  MatCheckboxModule, MatTableModule,
  MatMenuModule,
  MatFormFieldModule, MatInputModule,
  MatSelectModule, MatTooltipModule, MatProgressSpinnerModule, MatGridListModule
} from '@angular/material';

const modules = [
  MatToolbarModule, MatSidenavModule,
  MatListModule, MatCardModule,
  MatIconModule, MatButtonModule,
  MatCheckboxModule, MatTableModule,
  MatMenuModule, MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatTooltipModule, MatProgressSpinnerModule, MatGridListModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MyCustomMaterialModule {
}
