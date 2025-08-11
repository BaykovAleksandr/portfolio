import React from "react";
import styled from "styled-components";
import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/Menu";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #5b9050;
  display: flex;
  justify-content: space-between;
`;
