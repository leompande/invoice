import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Payment } from './payment.model';

export enum PaymentActionTypes {
  LoadPayments = '[Payment] Load Payments',
  AddPayment = '[Payment] Add Payment',
  UpsertPayment = '[Payment] Upsert Payment',
  AddPayments = '[Payment] Add Payments',
  UpsertPayments = '[Payment] Upsert Payments',
  UpdatePayment = '[Payment] Update Payment',
  UpdatePayments = '[Payment] Update Payments',
  DeletePayment = '[Payment] Delete Payment',
  DeletePayments = '[Payment] Delete Payments',
  ClearPayments = '[Payment] Clear Payments'
}

export class LoadPayments implements Action {
  readonly type = PaymentActionTypes.LoadPayments;

  constructor(public payload: { payments: Payment[] }) {}
}

export class AddPayment implements Action {
  readonly type = PaymentActionTypes.AddPayment;

  constructor(public payload: { payment: Payment }) {}
}

export class UpsertPayment implements Action {
  readonly type = PaymentActionTypes.UpsertPayment;

  constructor(public payload: { payment: Payment }) {}
}

export class AddPayments implements Action {
  readonly type = PaymentActionTypes.AddPayments;

  constructor(public payload: { payments: Payment[] }) {}
}

export class UpsertPayments implements Action {
  readonly type = PaymentActionTypes.UpsertPayments;

  constructor(public payload: { payments: Payment[] }) {}
}

export class UpdatePayment implements Action {
  readonly type = PaymentActionTypes.UpdatePayment;

  constructor(public payload: { payment: Update<Payment> }) {}
}

export class UpdatePayments implements Action {
  readonly type = PaymentActionTypes.UpdatePayments;

  constructor(public payload: { payments: Update<Payment>[] }) {}
}

export class DeletePayment implements Action {
  readonly type = PaymentActionTypes.DeletePayment;

  constructor(public payload: { id: string }) {}
}

export class DeletePayments implements Action {
  readonly type = PaymentActionTypes.DeletePayments;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPayments implements Action {
  readonly type = PaymentActionTypes.ClearPayments;
}

export type PaymentActions =
 LoadPayments
 | AddPayment
 | UpsertPayment
 | AddPayments
 | UpsertPayments
 | UpdatePayment
 | UpdatePayments
 | DeletePayment
 | DeletePayments
 | ClearPayments;
