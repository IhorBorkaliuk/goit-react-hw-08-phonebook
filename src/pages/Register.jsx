import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { TitleHome } from "./Home/HomeStyled";



export default function Register() {
  return (
    <div>
      <TitleHome>Registration Page</TitleHome>
      <RegisterForm/>
    </div>
  );
}