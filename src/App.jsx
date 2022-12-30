import { useState } from "react";
import ContactForm from "./contact-form/ContactForm";
import ContactTable from "./contact-table/ContactTable";


const  App = () => {
    const [contacts, setContacts] = useState([])

    const getContact = (contact) => {
        setContacts([].concat(contacts, contact));
    }

    return (
        <div>
            <ContactForm getContact={getContact} />
            <ContactTable contacts={contacts} />
        </div>
    )
}

export default App;