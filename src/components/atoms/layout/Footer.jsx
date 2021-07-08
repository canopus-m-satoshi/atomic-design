import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  width: 100%;
  padding: 8px 0;
  color: #fff;
  background-color: #11999e;
  text-align: center;
  position: fixed;
  bottom: 0;
`;
