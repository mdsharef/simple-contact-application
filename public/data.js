import { getId } from "../src/utils";

export const formFields = {
    name: {
        type: 'text',
        label: 'Name',
        placeholder: 'Md Muaz Ahmed',
    },
    email: {
        type: 'email',
        label: 'Email',
        placeholder: 'muaz@example.com',
    },
    phone: {
        type: 'tel',
        label: 'Phone',
        placeholder: '+8801421******',
    },
    address: {
        type: 'text',
        label: 'Address',
        placeholder: 'Azimpur, Dhaka',
    },
    hobey: {
        type: 'text',
        label: 'Favorite hobey',
        placeholder: 'reading',
    },
    birthDate: {
        type: 'date',
        label: 'BirthDate',
    },
    age: {
        type: 'number',
        label: 'Age',
        placeholder: '21',
    },
    group: {
        type: 'select',
        label: 'Group',
        options: [
            {
                id: getId.next().value,
                label: 'Select Group',
                value: '',
            },
            {
                id: getId.next().value,
                label: 'Home',
                value: 'home',
            },
            {
                id: getId.next().value,
                label: 'Office',
                value: 'office',
            }
        ]
    }
}