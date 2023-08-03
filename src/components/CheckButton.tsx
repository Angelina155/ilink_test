import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
width: 93%;
height: 68px;
border-radius: 88px;
border: none;
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.20) inset, -2px -4px 12px #FFF inset;
background: linear-gradient(135deg, #FFF 0%, #F2F2F2 100%);
cursor: pointer;
font-weight: 700;
`

interface ButtonProps {
  checkAnswer: () => void;
}


const Button: FC<ButtonProps> = ({ checkAnswer }) => {

    return (
        <StyledButton onClick={()=> checkAnswer()}>Проверить</StyledButton>
    );
};

export default Button;