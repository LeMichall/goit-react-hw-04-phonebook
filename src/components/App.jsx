import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  setFilter = e => {
    this.setState({ filter: e.target.value });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const addedContacts = [...contacts, contact];
    this.setState({ contacts: addedContacts });
  };
  removeContact = contactId => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({ contacts: updatedContacts });
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} setFilter={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
