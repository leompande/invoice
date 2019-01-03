import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component';
const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
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
export class SettingRoutingModule { }
