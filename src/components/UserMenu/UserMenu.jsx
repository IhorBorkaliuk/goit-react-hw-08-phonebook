import { FormButton } from 'components/RegisterForm/RegisterFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';
import { LogOutWrapper, WelcomeText } from 'components/RegisterForm/RegisterFormStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  console.log(userEmail);

  return (
    <LogOutWrapper>
      <WelcomeText>Welcome, {userEmail}!</WelcomeText>
      <FormButton type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </FormButton>
    </LogOutWrapper>
  );
};
