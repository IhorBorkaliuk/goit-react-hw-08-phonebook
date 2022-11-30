import { LabelFilter, InputFilter, Wrapper } from './FilterStyled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import {
  selectContacts,
  selectIsLoading,
  selectFilter,
} from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactsList/ContactsList';
import { TitleHome } from 'pages/Home/HomeStyled';

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
      {contacts.length > 0 && (
        <LabelFilter>
          Find contacts by name
          <InputFilter type="text" value={filter} onChange={handleChange} />
        </LabelFilter>
      )}
      {contacts.length === 0 && !isLoading && (
        <TitleHome>Додайте свій перший контакт до записної книжки</TitleHome>
      )}
      {contacts && <ContactList contacts={filteredContacts} />}
    </Wrapper>
  );
};
