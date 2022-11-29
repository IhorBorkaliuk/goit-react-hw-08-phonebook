import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  console.log(userEmail);

  return (
    <div>
      <p>Welcome, {userEmail}!</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
};
