import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png";
import bangkok from "./../../../assets/images/bangkok.webp";
import { Container } from "../../../components/Container";
import TabMenu, { TabsStatusType } from "./tabMenu/TabMenu";
import { S } from "./Works_Styles";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{
  title: string;
  status: TabsStatusType;
}> = [
  { title: "ALL", status: "all" },
  { title: "JS", status: "js" },
  { title: "REACT", status: "react" },
  { title: "NEXT", status: "next" },
];

const worksData = [
  {
    title: "BANGKOK EXSPRESS",
    text: "Vanilla JS Project (slider, carousel menu, filtering, adding to cart)",
    src: bangkok,
    href: "https://transcendent-zabaione-b9aed8.netlify.app/",
    target: "_blank",
    type: "js",
    id: 1
  },
  {
    href: "#",
    title: "HTML CSS JS",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, et ?",
    type: "react",
    id: 2
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "js") {
    filteredWorks = worksData.filter((work) => work.type === "js");
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "next") {
    filteredWorks = worksData.filter((work) => work.type === "next");
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        ></TabMenu>
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap"><AnimatePresence>
          {filteredWorks.map((work) => {
            return (
              <motion.div style={{width: '330px',
                flexGrow: 1, maxWidth: '540px'}} exit={{ opacity: 1 }} initial={{opacity: 0}} animate={{opacity: 1}} layout key={work.id}>
                <Work
                  title={work.title}
                  text={work.text}
                  src={work.src}
                  href={work.href}
                  key={work.id}
                  target={work.target}
                />
              </motion.div>
            );
          })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
