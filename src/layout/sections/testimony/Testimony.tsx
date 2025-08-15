//import React from 'react'

import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Icon from '../../../components/icon/Icon'
import Slider from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'

export default function Testimony() {
  return (
    <StyledTestimony>
      <FlexWrapper direction='column' align='center'>
        <SectionTitle>Testimony</SectionTitle>
        <Icon iconId="quotes" />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
}

const StyledTestimony = styled.section`
min-height: 615px;
background-color: #6e66ad;
`
