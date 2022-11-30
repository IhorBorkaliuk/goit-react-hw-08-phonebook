import styled from "styled-components";

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
  color: #565678;
  text-transform: uppercase;
  font-size: 24px;
`;

export const InputFilter = styled.input`
  display: block;
  width: 50%;
  padding: 0 15px;
  margin: 10px 0 15px;
  line-height: 40px;
  border-radius: 20px;
  border: 3px solid #565678;
  outline: none;
  font-family: 'Roboto', sans-serif;

  :focus {
    border: none;
    outline: 3px solid #b758b7;
  }
`;

export const Wrapper = styled.div`
text-align: center;
    display: block;
    justify-content: center;
    margin-top: 50px;
`