import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Payment} from './payment.model';
import {PaymentActions, PaymentActionTypes} from './payment.actions';

export interface State extends EntityState<Payment> {
  selected: string;
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Payment> = createEntityAdapter<Payment>();

export const initialState: State = adapter.getInitialState({
  selected: null,
  loading: false,
  loaded: false
});

export function reducer(
  state = initialState,
  action: PaymentActions
): State {
  switch (action.type) {
    case PaymentActionTypes.AddPayment: {
      return adapter.addOne(action.payload.payment, state);
    }

    case PaymentActionTypes.UpsertPayment: {
      return adapter.upsertOne(action.payload.payment, state);
    }

    case PaymentActionTypes.AddPayments: {
      return adapter.addMany(action.payload.payments, state);
    }

    case PaymentActionTypes.UpsertPayments: {
      return adapter.upsertMany(action.payload.payments, state);
    }

    case PaymentActionTypes.UpdatePayment: {
      return adapter.updateOne(action.payload.payment, state);
    }

    case PaymentActionTypes.UpdatePayments: {
      return adapter.updateMany(action.payload.payments, state);
    }

    case PaymentActionTypes.DeletePayment: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PaymentActionTypes.DeletePayments: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PaymentActionTypes.LoadPayments: {
      return adapter.addAll(action.payload.payments, state);
    }

    case PaymentActionTypes.ClearPayments: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
