import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65d3399d522627d501085701.mockapi.io/contacts/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};
export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
