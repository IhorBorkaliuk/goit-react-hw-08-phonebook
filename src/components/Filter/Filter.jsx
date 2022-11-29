import { LabelFilter, InputFilter, Wrapper } from './FilterStyled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import {
  selectContacts,
  selectIsLoading,
  selectFilter,
} from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Title } from 'components/ContactsList/ContactsListStyled';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);


  const handleChange = e => {
    const { value } = e.target;
    dispatch(contactsFilter(value));
  };

    const getFilteredContacts = () => {
      if (!filter) {
        return contacts;
      }
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    };
    const filteredContacts = getFilteredContacts(filter, contacts);
  
  return (
    <Wrapper>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </LabelFilter>
      {contacts.length > 0 && <Filter />}
      {contacts.length === 0 && !isLoading && (
        <Title>Додайте свій перший контакт до записної книжки</Title>
      )}
      {contacts && <ContactList contacts={filteredContacts} />}
    </Wrapper>
  );
};
