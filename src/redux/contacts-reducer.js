import { createReducer } from '@reduxjs/toolkit'

import { addContact, deleteContact } from './contacts-actions'

const contactReducer = createReducer([], {
    [addContact.type]: (store, {payload}) => [...store, payload],
    [deleteContact]: (store, {payload}) => store.filter(contact => contact.id !== payload)
});


export default contactReducer;