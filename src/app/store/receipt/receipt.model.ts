export interface Receipt {
  id: string;
  date: string;
  receipt_number: string;
  received_from: string;
  in_respect_of: string;
  payment_detail_id: string;
}

export const newReceipt = {
  id: '',
  date: '',
  receipt_number: '',
  received_from: '',
  in_respect_of: '',
  payment_detail_id: ''
}
