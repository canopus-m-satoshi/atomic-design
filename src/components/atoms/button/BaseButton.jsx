import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 4px 24px;
  color: #fff;
  border: none;
  border-radius: 9999px;
  outline: none;
  transition: opacity 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
