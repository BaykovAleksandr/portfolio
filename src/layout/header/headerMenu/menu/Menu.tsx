import React from "react";
import { S } from "../HeaderMenu_Styles";

const items = [
  { title: "Home", href: "home" },
  { title: "Skills", href: "skills" },
  { title: "Works", href: "works" },
  { title: "Feedback", href: "feedback" },
  { title: "Contact", href: "contact" },
];
export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => (
        <S.MenuItem key={index}>
          <S.Link href={"#" + item.href}>
            {item.title}
            <S.Mask>
              <span>{item.title}</span>
            </S.Mask>
            <S.Mask>
              <span>{item.title}</span>
            </S.Mask>
          </S.Link>
        </S.MenuItem>
      ))}
    </ul>
  );
};
