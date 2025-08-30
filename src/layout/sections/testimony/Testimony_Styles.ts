import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { S } from '../../sections/skills/Skills_Styles';

export const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: ${theme.colors.secondaryBg};

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
`;
