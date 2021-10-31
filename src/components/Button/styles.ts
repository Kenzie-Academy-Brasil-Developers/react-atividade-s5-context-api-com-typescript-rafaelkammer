import styled, { css } from "styled-components";

interface ButtonStyledProps {
  isDeleted: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: purple;
  color: white;
  outline: none;
  cursor: pointer;
  ${(props) =>
    props.isDeleted &&
    css`
      background: orange;
      color: white;
      display: flex;
      justify-content: center;
    `}
`;
