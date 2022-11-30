import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { useEffect } from "react";
import { TitleHome } from "./Home/HomeStyled";


export default function Contacts () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <TitleHome>Phonebook</TitleHome>
      <Form />
      <Filter />
    </div>
  );
};