import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  margin: 10px 20px;
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
  &.active {
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
    color: #565678;
  }
`;