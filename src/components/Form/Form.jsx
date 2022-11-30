import { useState } from 'react';
import { ButtonForm } from './FormStyled';
import { FormStyled, Text, Label, Input } from './FormStyled';
import { FormInner } from 'components/RegisterForm/RegisterFormStyled';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const hasAlreadyAdded = ({ name }) =>
    contacts.find(el => el.name.toLowerCase() === name.toLowerCase());

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    const contact = { name, number };
    evt.preventDefault();
    if (hasAlreadyAdded(contact)) {
      Notiflix.Notify.warning(`${contact.name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormInner>
        <Label>
          <Text>Name</Text>
          <Input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Text>Number</Text>
          <Input
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormInner>
    </FormStyled>
  );
}
