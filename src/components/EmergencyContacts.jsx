import React, { useState } from 'react';

function EmergencyContacts() {
  const [contacts, setContacts] = useState([]);

  // Function to handle adding a new emergency contact
  const handleAddContact = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const newContact = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      relation: event.target.relation.value,
    };
    // Update contacts state with the new contact object
    setContacts([...contacts, newContact]);
  };

  // Function to handle deleting an existing contact
  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <p>Store and manage your important emergency contacts for quick access.</p>
      <form onSubmit={handleAddContact}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />
        <label htmlFor="relation">Relation:</label>
        <input type="text" id="relation" name="relation" />
        <button type="submit">Add Contact</button>
      </form>
      <ul className="contact-list">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <li key={index}>
              <p>
                {contact.name} ({contact.relation}) - {contact.phone}
              </p>
              <button onClick={() => handleDeleteContact(index)}>Delete</button>
            </li>
          ))
        ) : (
          <p>Add your emergency contacts here.</p>
        )}
      </ul>
    </div>
  );
}

export default EmergencyContacts;

