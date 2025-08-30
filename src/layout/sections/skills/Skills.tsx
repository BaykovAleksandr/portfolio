
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";


const skillData = [
  {
    iconId: "code",
    title: "HTML5",
    text: "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation.",
  },
  {
    iconId: "css",
    title: "CSS3",
    text: "Cascading Style Sheets (level 3) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    iconId: "JS",
    title: "JavaScript",
    text: "A programminglanguage and core technology of the web platform, alongside HTML and CSS. Ninety-nine percent of websites on the World Wide Web use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
  },
  {
    iconId: "react",
    title: "REACT",
    text: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more 'seamless'. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
  },
  {
    iconId: "ts",
    title: "TypeScript",
    text: "TypeScript (abbreviated as TS) is a high-level programming language that adds static typing with optional type annotations to JavaScript. It is designed for developing large applications and transpiles to JavaScript. It is developed by Microsoft as free and open-source software released under an Apache License 2.0.",
  },
  {
    iconId: "styled",
    title: "Styled Components",
    text: "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between" gap="0">
          {skillData.map((skill, index) => {
            return (
              <Skill
                key={index}
                iconId={skill.iconId}
                title={skill.title}
                text={skill.text}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

