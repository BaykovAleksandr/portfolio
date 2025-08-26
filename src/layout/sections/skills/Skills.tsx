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
        <FlexWrapper wrap="wrap" justify="space-between" gap="0">
          <Skill
            iconId="code"
            title="HTML5"
            text="HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web."
          />
          <Skill
            iconId="css"
            title="CSS3"
            text="Cascading Style Sheets (level 3) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
          />
          <Skill
            iconId="react"
            title="REACT"
            text="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more 'seamless'. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies."
          />
          <Skill
            iconId="ts"
            title="TypeScript"
            text="TypeScript (abbreviated as TS) is a high-level programming language that adds static typing with optional type annotations to JavaScript. It is designed for developing large applications and transpiles to JavaScript. It is developed by Microsoft as free and open-source software released under an Apache License 2.0."
          />
          <Skill
            iconId="styled"
            title="Styled Components"
            text="Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!"
          />
          <Skill
            iconId="figma"
            title="FIGMA"
            text="Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows."
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  
`;
