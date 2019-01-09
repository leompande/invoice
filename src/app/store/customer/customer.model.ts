export interface Customer {
  id: string;
  customer_name: string;
  address?: string;
  contact_person?: string;
  phone_number?: string;
  email?: string;
  fax?: string;
  comments?: string;
}

export const newCustomer = {
  id: '',
  customer_name: '',
  address: '',
  contact_person: '',
  phone_number: '',
  entry_date: '',
  email: '',
  fax: '',
  comments: ''
};
