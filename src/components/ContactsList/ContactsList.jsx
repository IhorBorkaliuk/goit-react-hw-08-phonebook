import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, LabelText } from './ContactsListStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const item = contacts.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <LabelText>Name: {name}</LabelText>{' '}
        <LabelText>Number: {number}</LabelText>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </ListItem>
    );
  });
  return <List>{item}</List>;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
