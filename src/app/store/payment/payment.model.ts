export interface Payment {
  id: string;
  payment_type: string;
  cheque_number: string;
  amount: number;
  currency: string;
  amount_in_words: string;

}
