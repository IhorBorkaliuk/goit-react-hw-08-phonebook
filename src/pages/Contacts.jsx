import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { useEffect } from "react";


export default function Contacts () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
    </div>
  );
};