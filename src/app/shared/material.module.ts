import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCheckboxModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatDialogModule,
  MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

const modules = [
  MatToolbarModule, MatSidenavModule,
  MatListModule, MatCardModule,
  MatIconModule, MatButtonModule,
  MatCheckboxModule, MatTableModule,
  MatMenuModule, MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatTooltipModule, MatProgressSpinnerModule,
  MatGridListModule, MatPaginatorModule,
  MatProgressBarModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MyCustomMaterialModule {
}
