//import React from 'react'

import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import Slider from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../../sections/skills/Skills_Styles";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export default function Testimony() {
  return (
    <StyledTestimony>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>Feedback</SectionTitle>
          <S.IconWrapper>
            <Icon iconId="quotes" />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
}

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: ${theme.colors.secondaryBg};

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
`;
