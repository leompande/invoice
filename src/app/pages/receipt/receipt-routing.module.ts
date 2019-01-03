import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReceiptComponent} from './receipt.component';
const routes: Routes = [
  {
    path: '',
    component: ReceiptComponent,
    pathMatch: 'full',
    data: {
      title: 'Receipts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule { }
