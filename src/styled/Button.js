import styled from "styled-components";
export const Button = styled.div`
  width: 220px;
  border-radius: 5px;
  padding: 10px 18px;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s ease-in;
  border: 1px solid transparent;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: 700;
    transition: 0.4s ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  font-weight: 600;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
    font-weight: 700;
  }
`;
