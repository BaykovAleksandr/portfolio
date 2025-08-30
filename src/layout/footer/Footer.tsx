import Icon from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "../footer/Footer_Styles";

const socialItemsData = [
  { iconId: "telegram" },
  { iconId: "vk" },
  { iconId: "linkedin" },
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
                <S.SocialLink>
                  <Icon
                    height="21px"
                    width="21px"
                    viewBox="0 0 21px 21px"
                    iconId={item.iconId}
                  ></Icon>
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
