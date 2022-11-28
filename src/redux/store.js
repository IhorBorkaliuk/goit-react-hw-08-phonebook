import { filterReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
