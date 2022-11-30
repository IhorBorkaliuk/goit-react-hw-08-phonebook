import { LoginForm } from "components/LoginForm/LoginForm";
import { TitleHome } from "./Home/HomeStyled";


export default function Login() {
  return (
    <div>
      <TitleHome>Login page</TitleHome>
      <LoginForm />
    </div>
  );
}