import { FlexWrapper } from "../FlexWrapper";
import { S } from "./Slider_Styles";

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <FlexWrapper>
        <S.Slide>
          <S.Text>
            Excellent, well done, good job, Excellent, well done, good job ,
            Excellent, well done, good job ,fantastic, Excellent, well done,
            good job , Excellent, well done, good job
          </S.Text>
          <S.Name>@IvanIvanov</S.Name>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span></span>
        <span className="active"></span>
        <span></span>
      </S.Pagination>
    </S.Slider>
  );
};
