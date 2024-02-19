import styles from './contact-list.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, phone }) => (
    <li className={styles.contactItem} key={id}>
      {name}: {phone}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default ContactList;
