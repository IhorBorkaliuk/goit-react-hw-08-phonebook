import styled from "styled-components";

export const TitleHome = styled.nav`
  position: relative;
  padding-bottom: 0.5rem;
  margin-top: 50px;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  color: #565678;

  ::before {
    content: '';
    position: absolute;
    border-bottom: 2px solid #565678;
    bottom: 0.25rem;
    left: 50%;
    width: 30%;
    transform: translateX(-50%);
  }
  ::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #565678;
    bottom: 0;
    left: 50%;
    width: 15%;
    transform: translateX(-50%);
  }
`;