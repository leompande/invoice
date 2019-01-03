import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Invoice} from './invoice.model';
import {InvoiceActions, InvoiceActionTypes} from './invoice.actions';

export interface State extends EntityState<Invoice> {
  selected: string;
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Invoice> = createEntityAdapter<Invoice>();

export const initialState: State = adapter.getInitialState({
  selected: null,
  loading: false,
  loaded: false
});

export function reducer(
  state = initialState,
  action: InvoiceActions
): State {
  switch (action.type) {
    case InvoiceActionTypes.AddInvoice: {
      return adapter.addOne(action.payload.invoice, state);
    }

    case InvoiceActionTypes.UpsertInvoice: {
      return adapter.upsertOne(action.payload.invoice, state);
    }

    case InvoiceActionTypes.AddInvoices: {
      return adapter.addMany(action.payload.invoices, state);
    }

    case InvoiceActionTypes.UpsertInvoices: {
      return adapter.upsertMany(action.payload.invoices, state);
    }

    case InvoiceActionTypes.UpdateInvoice: {
      return adapter.updateOne(action.payload.invoice, state);
    }

    case InvoiceActionTypes.UpdateInvoices: {
      return adapter.updateMany(action.payload.invoices, state);
    }

    case InvoiceActionTypes.DeleteInvoice: {
      return adapter.removeOne(action.payload.id, state);
    }

    case InvoiceActionTypes.DeleteInvoices: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case InvoiceActionTypes.LoadInvoices: {
      return adapter.addAll(action.payload.invoices, state);
    }

    case InvoiceActionTypes.ClearInvoices: {
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
