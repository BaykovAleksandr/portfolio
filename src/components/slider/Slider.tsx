import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider_Styles";
import './../../styles/slider.css'

type SlidePropTypes = {
  text: string;
  userName: string
}

const Slide = (props: SlidePropTypes) => {
  return (
    <S.Slide>
      <S.Text>{props.text}
      </S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    text="Excellent, well done, good job, Excellent, well done, good job "
    userName="Ivan Ivanov"
  />,
  <Slide
    text="Excellent, well done, good job, Excellent, well done, good job "
    userName="Natasha Baykova"
  />,
  <Slide
    text="Excellent, well done, good job, Excellent, well done, good job "
    userName="Igor Zhukov"
  />,
  <Slide
    text="Excellent, well done, good job, Excellent, well done, good job "
    userName="Den gerasimov"
  />
];

export const Slider = () => (
  <S.Slider>
    <AliceCarousel mouseTracking items={items} />
  </S.Slider>
);

// export const Slider: React.FC = () => {
//   return (
//     <S.Slider>
//       <FlexWrapper>
//         <S.Slide>
//           <S.Text>
//             Excellent, well done, good job, Excellent, well done, good job ,
//             Excellent, well done, good job ,fantastic, Excellent, well done,
//             good job , Excellent, well done, good job
//           </S.Text>
//           <S.Name>@IvanIvanov</S.Name>
//         </S.Slide>
//       </FlexWrapper>
//       <S.Pagination>
//         <span></span>
//         <span className="active"></span>
//         <span></span>
//       </S.Pagination>
//     </S.Slider>
//   );
// };
