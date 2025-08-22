//import React from 'react'
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png";
import bangkok from "./../../../assets/images/bangkok.webp";
import { Container } from '../../../components/Container';
import TabMenu from './tabMenu/TabMenu';

const items = ["ALL", "JS", "REACT"];

export default function Works() {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu menuItems={items}></TabMenu>
        <FlexWrapper justify="space-between" align='flex-start'>
          <Work
            title="BANGKOK EXSPRESS"
            text="Vanila JS Project"
            src={bangkok}
            href="https://transcendent-zabaione-b9aed8.netlify.app/"
            target={"_blank"}
          ></Work>
          <Work
          href='#'
            title="HTML CSS JS"
            src={socialImg}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, et cum reiciendis numquam autem architecto porro in? Ut, vitae fugiat!"
          ></Work>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
}

const StyledWorks = styled.section`
  
`;
