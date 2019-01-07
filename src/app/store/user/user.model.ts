export interface User {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  password?: string;
  avatar_url: string;
  phone_number: string;
  email: string;
}


export const newUser = {
  id: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  username: '',
  password: '',
  avatar_url: '',
  phone_number: '',
  email: ''
};
