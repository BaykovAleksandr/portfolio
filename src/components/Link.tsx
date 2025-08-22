import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Link = styled.a`
  font-family: 400px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: ${theme.colors.accent};
  }
`;
