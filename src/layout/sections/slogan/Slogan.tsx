//import React from 'react'

import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';

export default function Slogan() {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction='column' align='center'>
          <SectionTitle>I am available for freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
}

const StyledSlogan = styled.section`
min-height: 30vh;
background-color: #3f899b;

`
