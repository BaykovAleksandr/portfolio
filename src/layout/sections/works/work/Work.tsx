//import React from 'react'

import styled from 'styled-components'

type WorkPropsType = {
	title?: string;
	text?: string;
	src?: string;
  href?: string;
  code?: string;
  target: "_blank"

}

export default function Work(props: WorkPropsType) {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={props.href}>demo</Link>
      <Link href={props.code}>code</Link>
    </StyledWork>
  );
}

const StyledWork = styled.div`
background-color: yellow;
max-width: 540px;
width: 100%;
`

const Image = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`

const Link = styled.a``;


const Title = styled.h3``;

const Text = styled.p``;
