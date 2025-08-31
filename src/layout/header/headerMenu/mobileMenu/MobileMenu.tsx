import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";
import { useState } from 'react';

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopap isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopap>
    </S.MobileMenu>
  );
};
