import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useState } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import FilterBar from './FilterBar/FilterBar';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('savedContacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(
        option => option.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const deleteAllContacts = () => {
    setContacts([]);
  };
  const changeFilter = filterValue => {
    setFilter(filterValue);
  };

  const visibleContact = contacts.filter(contact =>
    filter === ''
      ? contact
      : contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onAdd={addContact} />

      <h2>Contacts</h2>
      <FilterBar
        filter={filter}
        onChangeFilter={changeFilter}
        onDeleteAllContacts={deleteAllContacts}
      />
      <ContactList contacts={visibleContact} deleteContact={deleteContact} />
    </Container>
  );
};
