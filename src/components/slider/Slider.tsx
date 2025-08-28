//import React from 'react'
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from '../../styles/Theme';

export default function Slider() {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>
            Excellent, well done, good job, Excellent, well done, good job
            , Excellent, well done, good job ,fantastic, Excellent, well done, good job
            , Excellent, well done, good job
          </Text>
          <Name>@IvanIvanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span className='active'></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  max-width: 500px;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p``;

const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-weight: 600;
font-size: 16px;
letter-spacing: 1px;
text-transform: uppercase;
margin: 22px 0 32px;
display: inline-block;
`;

const Pagination = styled.div`
	span {
		display: inline-block;
		width: 7px;
		height: 7px;
		margin: 5px;
		background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
	}`;
