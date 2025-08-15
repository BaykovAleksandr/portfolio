import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export default function Skills() {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap="wrap" justify={"space-between"}>
        <Skill iconId="code" title="HTML5" text="lorem10" />
        <Skill iconId="css" title="CSS3" text="wwwwwwwww" />
        <Skill iconId="react" title="REACT" />
        <Skill iconId="ts" title="TypeScript" />
        <Skill iconId="styled" title="StyledComponents" />
        <Skill iconId="figma" title="FIGMA" />
      </FlexWrapper>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  background-color: pink;
  min-height: 30vh;
`;
