import photo from "./../../../assets/images/photo.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";



export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap">
          <div>
            <S.SmallText>Hi, there!</S.SmallText>
            <S.Name>
              I am <span>Aleksandr Baykov</span>
            </S.Name>
            <S.MainTitle>
              <p>Frontend developer</p>
              <Typewriter
                options={{
                  strings: ["Frontend developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
