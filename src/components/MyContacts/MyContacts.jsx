import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/contacts-operations';

import { setFilter } from '../../redux/filter/filter-slice';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/contacts-selectors';

import styles from './my-contacts.module.css';

const MyContacts = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const items = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} />
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {Boolean(items.length) && (
        <ContactList items={items} deleteContact={onDeleteContact} />
      )}
    </div>
  );
};

export default MyContacts;
