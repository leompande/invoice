export interface Customer {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  entry_date?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  fax?: string;
  comments?: string;
}

export const newCustomer = {
  id: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  entry_date: '',
  address: '',
  phone_number: '',
  email: '',
  fax: '',
  comments: ''
};
