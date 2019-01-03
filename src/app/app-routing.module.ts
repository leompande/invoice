import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {PageComponent} from './pages/page.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {state: 'login'}
  },
  {
    path: 'page',
    component: PageComponent,
    data: {state: 'page', title: 'Dashboard'},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {state: 'home', title: 'Dashboards'}
      },
      {
        path: 'invoice',
        loadChildren: './pages/invoice/invoice.module#InvoiceModule',
        data: {state: 'invoice'}
      },
      {
        path: 'customers',
        loadChildren: './pages/customer/customer.module#CustomerModule',
        data: {state: 'customer'}
      },
      {
        path: 'receipts',
        loadChildren: './pages/receipt/receipt.module#ReceiptModule',
        data: {state: 'receipts'}
      },
      {
        path: 'users',
        loadChildren: './pages/user/user.module#UserModule',
        data: {state: 'user'}
      },
      {
        path: 'settings',
        loadChildren: './pages/setting/setting.module#SettingModule',
        data: {state: 'setting'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
