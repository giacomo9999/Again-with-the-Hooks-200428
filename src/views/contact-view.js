import React from "react";
import ContactForm from "../components/contact-form";
import ContactTable from "../components/contact-table";
import { ContactContextProvider } from "../context/contact-context";

export default function Contacts() {
  return (
    <ContactContextProvider>
      <div>
        <h3>Contacts</h3>
        <ContactForm />
        <ContactTable />
      </div>
    </ContactContextProvider>
  );
}
