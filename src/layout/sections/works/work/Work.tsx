import { Link } from "../../../../components/Link";
import { S } from "../Works_Styles";

type WorkPropsType = {
  title?: string;
  text?: string;
  src?: string;
  href?: string;
  code?: string;
  target?: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <Link href={props.href} target={props.target} noUnderline>
        <S.ImageWrapper>
          <S.Image src={props.src} alt="" />
        </S.ImageWrapper>
      </Link>

      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href={props.href} target={props.target}>
          demo
        </Link>
        <Link href={props.code}>code</Link>
      </S.Description>
    </S.Work>
  );
};
