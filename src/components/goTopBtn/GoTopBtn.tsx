import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn>
          <Icon
            iconId={"arrowGoTop"}
            height="15"
            width="16"
            viewBox={"0 0 16 15"}
          ></Icon>
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
