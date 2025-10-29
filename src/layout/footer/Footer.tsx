import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "../footer/Footer_Styles";

const socialItemsData = [
  {
    iconId: "telegram",
    href: "https://t.me/aleksandr_baykov",
  },
  {
    iconId: "vk",
    href: "https://vk.com/id670464814",
  },
  {
    iconId: "linkedin",
    href: "#",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <S.Name>Aleksandr</S.Name>
        <S.SocialList>
          {socialItemsData.map((item, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink
                  href={item.href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={item.iconId} 
                >
                  <Icon
                    height="21"
                    width="21"
                    viewBox="0 0 21 21"
                    iconId={item.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>@ 2025 Aleksandr Baykov, All Right Reserved</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
