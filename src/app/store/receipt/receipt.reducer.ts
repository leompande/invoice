import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Receipt} from './receipt.model';
import {ReceiptActions, ReceiptActionTypes} from './receipt.actions';

export interface State extends EntityState<Receipt> {
  selected: string;
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Receipt> = createEntityAdapter<Receipt>();

export const initialState: State = adapter.getInitialState({
  selected: null,
  loading: false,
  loaded: false
});

export function reducer(
  state = initialState,
  action: ReceiptActions
): State {
  switch (action.type) {
    case ReceiptActionTypes.AddReceipt: {
      return adapter.addOne(action.payload.receipt, state);
    }

    case ReceiptActionTypes.UpsertReceipt: {
      return adapter.upsertOne(action.payload.receipt, state);
    }

    case ReceiptActionTypes.AddReceipts: {
      return adapter.addMany(action.payload.receipts, state);
    }

    case ReceiptActionTypes.UpsertReceipts: {
      return adapter.upsertMany(action.payload.receipts, state);
    }

    case ReceiptActionTypes.UpdateReceipt: {
      return adapter.updateOne(action.payload.receipt, state);
    }

    case ReceiptActionTypes.UpdateReceipts: {
      return adapter.updateMany(action.payload.receipts, state);
    }

    case ReceiptActionTypes.DeleteReceipt: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ReceiptActionTypes.DeleteReceipts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ReceiptActionTypes.LoadReceipts: {
      return adapter.addAll(action.payload.receipts, state);
    }

    case ReceiptActionTypes.ClearReceipts: {
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
