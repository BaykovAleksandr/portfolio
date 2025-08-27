//import React from 'react'

import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Icon from '../../../components/icon/Icon'
import Slider from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { IconWrapper } from '../skills/skill/Skill'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'

export default function Testimony() {
  return (
    <StyledTestimony>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>Feedback</SectionTitle>
          <IconWrapper>
            <Icon iconId="quotes" />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
}

const StyledTestimony = styled.section`
min-height: 50vh;
background-color: ${theme.colors.secondaryBg};

${IconWrapper} 
{
  margin: 40px 0 72px;
}
`
