import { Form } from "components/Form/Form";
import { useDispatch } from "react-redux";


export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>
        Phonebook
      </h1>
      <Form />
      <Filter />
    </Container>
  );
};