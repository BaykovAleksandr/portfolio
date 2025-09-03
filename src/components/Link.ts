import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{ active?: boolean; noUnderline?: boolean }>`
  font-family: 400px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      ${(props) =>
        !props.noUnderline &&
        css`
          height: 10px;
        `}
    }
  }

  &::before {
    content: "";
    display: ${(props) => (props.noUnderline ? "none" : "inline-block")};
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: ${theme.colors.accent};
    height: ${(props) => (props.active && !props.noUnderline ? "10px" : "0")};

    ${(props) =>
      props.active &&
      !props.noUnderline &&
      css<{ active?: boolean }>`
        height: 10px;
      `}
  }
`;
