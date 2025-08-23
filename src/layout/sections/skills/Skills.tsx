import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export default function Skills() {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify={"space-between"} gap='0'>
          <Skill iconId="code" title="HTML5" text="lorem10" />
          <Skill iconId="css" title="CSS3" text="wwwwwwwww" />
          <Skill
            iconId="react"
            title="REACT"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi tempora mollitia similique in dignissimos?"
          />
          <Skill
            iconId="ts"
            title="TypeScript"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi tempora mollitia similique in dignissimos?"
          />
          <Skill
            iconId="styled"
            title="StyledComponents"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi tempora mollitia similique in dignissimos?"
          />
          <Skill
            iconId="figma"
            title="FIGMA"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi tempora mollitia similique in dignissimos?"
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  min-height: 100vh;
`;
