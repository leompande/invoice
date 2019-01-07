export interface Invoice {
  id: string;
  invoice_number: string;
  date_created: string;
  venue: string;
  check_in_date: string;
  check_out_date: string;
  no_pax_exp: string;
  customer_id: string;
  product_ids: string[];
  sub_total: number;
  total: number;
  discount: number;
  amount_paid: number;
  balance_due: number;
  is_service_chargable: boolean;
  service_charge: number;
  is_vat_included: boolean;
  vat: number;
  remarks: string;
}


export const newInvoice: Invoice = {
  id: '',
  invoice_number: '',
  date_created: '',
  venue: '',
  check_in_date: '',
  check_out_date: '',
  no_pax_exp: '',
  customer_id: '',
  product_ids: [],
  sub_total: null,
  total: null,
  discount: null,
  amount_paid: null,
  balance_due: null,
  is_service_chargable: false,
  service_charge: null,
  is_vat_included: false,
  vat: null,
  remarks: ''
};
