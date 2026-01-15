import styled from 'styled-components'
import {SectionTitle} from '../../../components/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import cv from '../../../assets/images/cv.pdf'
import {Link} from "../../../components/Link.ts";


export const Slogan: React.FC = () => {
    return (
        <StyledSlogan id={"slogan"}>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle>I am available for freelance</SectionTitle>
                    <Button><Link href={cv} target={"_blank"}>Hire me</Link>
                    </Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
}
const StyledSlogan = styled.section`
`
