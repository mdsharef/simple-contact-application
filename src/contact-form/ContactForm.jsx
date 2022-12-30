import { useState } from "react";
import { formFields } from "../../public/data.js";
import InputField from "../ui/InputField";
import { addValueFunc, createContactObj, createFormDataArr, getId } from "../utils";

const initialFormState = addValueFunc(formFields);

const ContactForm = ({ getContact }) => {
    const [formState, setFormState] = useState({...initialFormState});
    const formDatum = createFormDataArr(formState)

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: {
                ...formState[e.target.name],
                value: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const contact = createContactObj(formState);
        contact.id = getId.next().value;
        getContact(contact);
        setFormState({...initialFormState});
    }

    return (
        <div>
            <h3>Create New Contact</h3>
            <form onSubmit={handleSubmit}>
                {
                    formDatum.map(item => (
                        <InputField 
                            key={item.id} 
                            name={item.name} 
                            label={item.label} 
                            type={item.type} 
                            value={item.value} 
                            placeholder={item.placeholder && item.placeholder} 
                            options={item.options && item.options}
                            onChange={handleChange} 
                        />
                    ))
                }
                <input type="submit" value='Create Contact' />
            </form>
        </div>
    )
}

export default ContactForm;