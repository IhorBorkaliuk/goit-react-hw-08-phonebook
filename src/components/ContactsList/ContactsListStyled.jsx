import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 34px 30px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  margin-top: 50px;
  margin-right: 340px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const LabelText = styled.p`
  margin: 0px 20px;
  color: #565678;
`;

export const AppWrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
`
