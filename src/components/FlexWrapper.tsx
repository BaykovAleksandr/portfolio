import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  padding?: string;
  background?: string;
};

export const FlexWrapper = styled.section<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-around"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  height: 100%;
  gap: ${(props) => props.gap || "20px"};
  padding: ${(props) => props.padding || "100px 0"};
  background-color: ${props => props.background || 'inherit !important'};
`;
