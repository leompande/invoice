import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyCustomMaterialModule} from './shared/material.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CustomerComponent} from './pages/customer/customer.component';
import {InvoiceComponent} from './pages/invoice/invoice.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/app.effects';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {AppRoutingModule} from './app-routing.module';
import {PageComponent} from './pages/page.component';
import {LoginComponent} from './pages/login/login.component';
import {RouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer} from './store/router/router.reducer';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {ServiceWorkerModule} from '@angular/service-worker';
import {MainDataTableComponent} from './shared/main-data-table/main-data-table.component';
import {LoaderComponent} from './shared/loader/loader.component';
import {FormatNumberPipe} from './shared/format-number.pipe';
import {SharedModule} from './shared/shared.module';
import {ReceiptComponent} from './pages/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftMenuComponent,
    PageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})

  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer}, AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
