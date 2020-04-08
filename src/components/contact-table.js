import React, { useState, useContext } from "react";
import { ContactContext } from "../context/contact-context";

export default function ContactTable() {
  // subscribe to "contacts" state and access dispatch function
  const [state, dispatch] = useContext(ContactContext);
  // declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const delContact = (id) => {
    dispatch({ type: "DEL_CONTACT", payload: id });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null);
  };

  const rows = state.contacts.map((contact) => (
    <tr
      key={contact.id}
      onClick={() => setSelectedId(contact.id)}
      active={contact.id === selectedId}
    >
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <tr>
            <td onClick={onRemoveUser}>Remove</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
