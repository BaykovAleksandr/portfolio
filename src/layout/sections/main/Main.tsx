//import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/photo.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export default function Main() {
  return (
    <StyledMain>
      <FlexWrapper
        justify="space-around"
        align="center"
      >
        <div>
          <span>Hi There</span>
          <Name>I am Aleksandr Baykov</Name>
          <MainTitle>Frontend developer</MainTitle>
        </div>

        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.main`
min-height: 50vh;
background-color: #c0abab;

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
font-size: 16px`

const Name = styled.h2`
`
