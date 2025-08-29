import photo from "./../../../assets/images/photo.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <div>
            <S.SmallText>Hi There!</S.SmallText>
            <S.Name>
              I am <span>Aleksandr Baykov</span>
            </S.Name>
            <S.MainTitle>Frontend developer</S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
