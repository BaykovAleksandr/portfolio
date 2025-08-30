import { SectionTitle } from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import Slider from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../../sections/skills/Skills_Styles";
import { Container } from "../../../components/Container";
import { StyledTestimony } from "./Testimony_Styles";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>Feedback</SectionTitle>
          <S.IconWrapper>
            <Icon iconId="quotes" />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};
