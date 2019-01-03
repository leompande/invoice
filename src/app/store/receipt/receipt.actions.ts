import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Receipt } from './receipt.model';

export enum ReceiptActionTypes {
  LoadReceipts = '[Receipt] Load Receipts',
  AddReceipt = '[Receipt] Add Receipt',
  UpsertReceipt = '[Receipt] Upsert Receipt',
  AddReceipts = '[Receipt] Add Receipts',
  UpsertReceipts = '[Receipt] Upsert Receipts',
  UpdateReceipt = '[Receipt] Update Receipt',
  UpdateReceipts = '[Receipt] Update Receipts',
  DeleteReceipt = '[Receipt] Delete Receipt',
  DeleteReceipts = '[Receipt] Delete Receipts',
  ClearReceipts = '[Receipt] Clear Receipts'
}

export class LoadReceipts implements Action {
  readonly type = ReceiptActionTypes.LoadReceipts;

  constructor(public payload: { receipts: Receipt[] }) {}
}

export class AddReceipt implements Action {
  readonly type = ReceiptActionTypes.AddReceipt;

  constructor(public payload: { receipt: Receipt }) {}
}

export class UpsertReceipt implements Action {
  readonly type = ReceiptActionTypes.UpsertReceipt;

  constructor(public payload: { receipt: Receipt }) {}
}

export class AddReceipts implements Action {
  readonly type = ReceiptActionTypes.AddReceipts;

  constructor(public payload: { receipts: Receipt[] }) {}
}

export class UpsertReceipts implements Action {
  readonly type = ReceiptActionTypes.UpsertReceipts;

  constructor(public payload: { receipts: Receipt[] }) {}
}

export class UpdateReceipt implements Action {
  readonly type = ReceiptActionTypes.UpdateReceipt;

  constructor(public payload: { receipt: Update<Receipt> }) {}
}

export class UpdateReceipts implements Action {
  readonly type = ReceiptActionTypes.UpdateReceipts;

  constructor(public payload: { receipts: Update<Receipt>[] }) {}
}

export class DeleteReceipt implements Action {
  readonly type = ReceiptActionTypes.DeleteReceipt;

  constructor(public payload: { id: string }) {}
}

export class DeleteReceipts implements Action {
  readonly type = ReceiptActionTypes.DeleteReceipts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearReceipts implements Action {
  readonly type = ReceiptActionTypes.ClearReceipts;
}

export type ReceiptActions =
 LoadReceipts
 | AddReceipt
 | UpsertReceipt
 | AddReceipts
 | UpsertReceipts
 | UpdateReceipt
 | UpdateReceipts
 | DeleteReceipt
 | DeleteReceipts
 | ClearReceipts;
