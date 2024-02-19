import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './contact-form.module.css';

const ContactForm = ({ onSubmit }) => {
  const contactId = nanoid();
  const telId = nanoid();

  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      name: '',
      phone: '',
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, phone } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.formPlace}>
      <div>
        <label htmlFor={contactId}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          id={contactId}
          className={styles.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={telId}>Phone</label>
        <input
          value={phone}
          onChange={handleChange}
          id={telId}
          className={styles.inputTel}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
