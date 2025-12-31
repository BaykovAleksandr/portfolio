import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "./../../../assets/images/todo.png";
import bangkok from "./../../../assets/images/bangkok.webp";
import idea from "./../../../assets/images/startapy_eto_zlo_ili_blago_chast_1-01.jpg";
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
    text: "Vanilla JS Project (slider, carousel menu, filtering, drag and drop)",
    src: bangkok,
    href: "https://tangerine-truffle-9cb2fb.netlify.app/",
    target: "_blank",
    type: "js",
    id: 1,
    code: "https://github.com/BaykovAleksandr/jsbasic-20250515_baykov-aleksandr",
  },
  {
    href: "https://baykovaleksandr.github.io/ToDoList/",
    title: "Todo list, you know",
    src: socialImg,
    text: "React, RTK, MUI, ZOD",
    type: "react",
    id: 2,
    target: "_blank",
    code: "https://github.com/BaykovAleksandr/ToDoList",
  },
  {
    href: "https://www.the-idea-nick.ru/",
    title: "IDEA-NICK",
    src: idea,
    text: "React, Express, Postgres",
    target: "_blank",
    type: "react",
    id: 3,
    code: "https://github.com/BaykovAleksandr/fullstack-ideanick",
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
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <AnimatePresence>
            {filteredWorks.map((work) => {
              return (
                <motion.div
                  style={{ width: "330px", flexGrow: 1, maxWidth: "540px" }}
                  exit={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                  key={work.id}
                >
                  <Work
                    title={work.title}
                    text={work.text}
                    src={work.src}
                    href={work.href}
                    key={work.id}
                    target={work.target}
                    code={work.code}
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
