//import React from 'react'
import Icon from '../../../../../components/icon/Icon';
import styled from 'styled-components';


type SkillPropsType = {
  iconId: string;
  title: string;
  text?: string;

}

export function Skill(props: SkillPropsType) {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText> 
        
    </StyledSkill>
  );
}

const SkillTitle = styled.h3``

const SkillText = styled.p``

const StyledSkill = styled.div`
width: 30%;
background-color: #776363;
margin: 10px;
`;
