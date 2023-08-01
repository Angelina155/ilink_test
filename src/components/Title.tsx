import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
margin-bottom: 20px;
color: #252525;
text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25), -2px -4px 3px #FFF;
font-size: 36px;
font-weight: 400;

@media (max-width: 770px) {
  font-size: 30px;
}
`

interface TitleProps {
  text: string;
}


const Title: FC<TitleProps> = ({ text }) => {
    return (
        <StyledTitle>{text}</StyledTitle>
    );
};

export default Title;