import { Logo } from "../../components/logo/logo";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import React from "react";
import { S } from "./Header_Styles";



export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper align="center" justify="space-between" padding="20px 10px">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu />
          ) : (
            <DesktopMenu  />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
