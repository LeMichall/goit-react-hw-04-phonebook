import React from 'react';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, removeContact }) => {
  return (
    <div className={css.contactListWrapper}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              className={css.contactListBtn}
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
