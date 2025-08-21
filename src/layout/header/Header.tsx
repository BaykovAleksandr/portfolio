//import React from "react";
import styled from "styled-components";
import Logo from "../../components/logo/logo";
import HeaderMenu from ".././header/headerMenu/HeaderMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align="center" justify='space-between' padding='20px 10px'>
          <Logo />
          <HeaderMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

`;
