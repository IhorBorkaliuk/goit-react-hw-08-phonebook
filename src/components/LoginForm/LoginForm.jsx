import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';

import {
  FormStyled,
  FormInner,
  Label,
  Input,
  FormButton,
} from 'components/RegisterForm/RegisterFormStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInUser({
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
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <FormButton type="submit">Log In</FormButton>
      </FormInner>
    </FormStyled>
  );
};
