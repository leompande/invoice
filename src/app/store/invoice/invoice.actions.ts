import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Invoice } from './invoice.model';

export enum InvoiceActionTypes {
  LoadInvoices = '[Invoice] Load Invoices',
  AddInvoice = '[Invoice] Add Invoice',
  UpsertInvoice = '[Invoice] Upsert Invoice',
  AddInvoices = '[Invoice] Add Invoices',
  UpsertInvoices = '[Invoice] Upsert Invoices',
  UpdateInvoice = '[Invoice] Update Invoice',
  UpdateInvoices = '[Invoice] Update Invoices',
  DeleteInvoice = '[Invoice] Delete Invoice',
  DeleteInvoices = '[Invoice] Delete Invoices',
  ClearInvoices = '[Invoice] Clear Invoices'
}

export class LoadInvoices implements Action {
  readonly type = InvoiceActionTypes.LoadInvoices;

  constructor(public payload: { invoices: Invoice[] }) {}
}

export class AddInvoice implements Action {
  readonly type = InvoiceActionTypes.AddInvoice;

  constructor(public payload: { invoice: Invoice }) {}
}

export class UpsertInvoice implements Action {
  readonly type = InvoiceActionTypes.UpsertInvoice;

  constructor(public payload: { invoice: Invoice }) {}
}

export class AddInvoices implements Action {
  readonly type = InvoiceActionTypes.AddInvoices;

  constructor(public payload: { invoices: Invoice[] }) {}
}

export class UpsertInvoices implements Action {
  readonly type = InvoiceActionTypes.UpsertInvoices;

  constructor(public payload: { invoices: Invoice[] }) {}
}

export class UpdateInvoice implements Action {
  readonly type = InvoiceActionTypes.UpdateInvoice;

  constructor(public payload: { invoice: Update<Invoice> }) {}
}

export class UpdateInvoices implements Action {
  readonly type = InvoiceActionTypes.UpdateInvoices;

  constructor(public payload: { invoices: Update<Invoice>[] }) {}
}

export class DeleteInvoice implements Action {
  readonly type = InvoiceActionTypes.DeleteInvoice;

  constructor(public payload: { id: string }) {}
}

export class DeleteInvoices implements Action {
  readonly type = InvoiceActionTypes.DeleteInvoices;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearInvoices implements Action {
  readonly type = InvoiceActionTypes.ClearInvoices;
}

export type InvoiceActions =
 LoadInvoices
 | AddInvoice
 | UpsertInvoice
 | AddInvoices
 | UpsertInvoices
 | UpdateInvoice
 | UpdateInvoices
 | DeleteInvoice
 | DeleteInvoices
 | ClearInvoices;
