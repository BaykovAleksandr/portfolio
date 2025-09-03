import photo from "./../../../assets/images/photo.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
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
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
