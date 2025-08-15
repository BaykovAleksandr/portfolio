//import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import Menu from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/FlexWrapper';
import Work from './work/Work';
import socialImg from './../../../assets/images/proj-1.png'

const items = ["ALL", "JS", "REACT"];

export default function Works() {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={items}></Menu>
      <FlexWrapper justify='space-between'>
        <Work title="HTML CSS" text="landingPage" src={socialImg}></Work>
        <Work
          title="Social Network"
          src={socialImg}
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, et cum reiciendis numquam autem architecto porro in? Ut, vitae fugiat!"
        ></Work>
        <Work title="React" src={socialImg}></Work>
      </FlexWrapper>
    </StyledWorks>
  );
}


const StyledWorks = styled.section`
min-height: 100vh;
background-color: #88a7c0;
`