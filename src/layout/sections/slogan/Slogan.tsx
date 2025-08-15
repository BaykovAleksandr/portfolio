//import React from 'react'

import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'

export default function Slogan() {
  return (
	<StyledSlogan>
		<SectionTitle>I am available for freelance</SectionTitle>
		<Button>Hire me</Button>

	</StyledSlogan>
  )
}

const StyledSlogan = styled.section`
min-height: 30vh;
background-color: #3f899b;

`
