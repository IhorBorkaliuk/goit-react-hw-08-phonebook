import { StyledLink } from 'components/AuthNav/AuthNavWrap';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};
