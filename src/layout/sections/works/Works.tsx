import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png";
import bangkok from "./../../../assets/images/bangkok.webp";
import { Container } from "../../../components/Container";
import TabMenu from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";

const items = ["ALL", "JS", "REACT"];

const workData = [
  {
    title: "BANGKOK EXSPRESS",
    text: "Vanilla JS Project (slider, carousel menu, filtering, adding to cart)",
    src: bangkok,
    href: "https://transcendent-zabaione-b9aed8.netlify.app/",
    target: "_blank",
  },
  {
    href: "#",
    title: "HTML CSS JS",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, et ?",
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu menuItems={items}></TabMenu>
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {workData.map((work, index) => {
            return (
              <Work
                title={work.title}
                text={work.text}
                src={work.src}
                href={work.href}
                key={index}
                target={work.target}
              ></Work>
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
