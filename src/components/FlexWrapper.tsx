import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
};

export const FlexWrapper = styled.section<FlexWrapperPropsType>`
  display: flex;
  
  gap: 20px;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-around"};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: 100%;
`;
