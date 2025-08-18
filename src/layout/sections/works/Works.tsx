//import React from 'react'
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import Menu from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png";
import bangkok from './../../../assets/images/bangkok.webp'

const items = ["ALL", "JS", "REACT"];

export default function Works() {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={items}></Menu>
      <FlexWrapper justify="space-between">
        <Work
          title="Vanila JS"
          text="BANGKOK EXSPRESS"
          src={bangkok}
          href="https://transcendent-zabaione-b9aed8.netlify.app/"
          target="_blank"
        ></Work>
        <Work
          title="HTML CSS JS"
          src={socialImg}
          target="_blank"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, et cum reiciendis numquam autem architecto porro in? Ut, vitae fugiat!"
        ></Work>
        <Work title="React" src={socialImg} target="_blank"></Work>
      </FlexWrapper>
    </StyledWorks>
  );
}

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #88a7c0;
`;
