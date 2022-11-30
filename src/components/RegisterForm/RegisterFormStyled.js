import styled from "styled-components";

export const FormStyled = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  padding: 60px 50px;
  margin: 50px auto 0;
  background-color: #565678;
  border-radius: 20px;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right bottom,
      rgba(43, 44, 78, 0.5),
      rgba(104, 22, 96, 0.5)
    );
    border-radius: 20px;
  }
`;

export const FormInner = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  font-size: 14px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0 15px;
  margin: 10px 0 15px;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  font-family: 'Roboto', sans-serif;

  :focus {
    border: none;
    outline: 2px solid #b758b7;
  }
`;

export const FormButton = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  border: #565678;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
    color: #565678;
  }
  :focus {
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
    color: #565678;
  }
  &.active {
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
    color: #565678;
  }
`;

export const LogOutWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const WelcomeText = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin: 0px 20px;
  font-size: 18px;
  color: #565678;
`;