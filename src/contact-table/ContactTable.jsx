import { useState } from "react";

const ContactTable = ({ contacts }) => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    // let filteredContacts = [];
    // if(filter === 'all') {
    //     filteredContacts = [...contacts]
    // } else {
    //     filteredContacts = contacts.filter(contact => contact.group === filter)
    // }
    
    // if(searchTerm) {
    //     filteredContacts = filteredContacts.filter(contact => contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || contact.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    // }

    const searchCB = (contact) => {
        return contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || contact.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    }

    let filteredContacts = [];
    if(filter === 'all') {
        filteredContacts = searchTerm ? contacts.filter(searchCB) : [...contacts];
    } else {
        filteredContacts = contacts.filter(
            (contact) => contact.group === filter && searchCB(contact)
        );
    }

    return (
        <div>
            <h3>Your Contacts</h3>
            <div>
                <label htmlFor='filter'>Filters</label>
                <select 
                    name="filter" 
                    id="filter" 
                    value={filter} 
                    onChange={handleChange}
                >
                    <option value="all">All</option>
                    <option value="">None</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
                <input 
                    type="search" 
                    placeholder="search" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
            </div>
            <br />
            {filteredContacts.length > 0 ? (
                <table border="true">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>BirthDate</th>
                            <th>Age</th>
                            <th>Favorite Hobey</th>
                            <th>Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.address}</td>
                                <td>{contact.birthDate}</td>
                                <td>{contact.age}</td>
                                <td>{contact.hobey}</td>
                                <td>{contact.group}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h5>There is no contact in your phonebook</h5>
            )}
        </div>
    )
}

export default ContactTable;