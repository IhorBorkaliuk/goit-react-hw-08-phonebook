import { useSelector } from 'react-redux';
import {
  selectUserEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserEmail);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
