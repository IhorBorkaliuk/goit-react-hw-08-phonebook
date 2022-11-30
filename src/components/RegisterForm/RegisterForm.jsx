import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import {
  FormStyled,
  FormInner,
  Label,
  Input,
  FormButton,
} from './RegisterFormStyled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="on">
      <FormInner>
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <FormButton type="submit">Register</FormButton>
      </FormInner>
    </FormStyled>
  );
};
