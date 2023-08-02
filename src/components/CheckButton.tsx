import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { KitWord } from '../types/types';

const StyledButton = styled.button`
width: 93%;
height: 68px;
border-radius: 88px;
border: none;
background: linear-gradient(135deg, #FFF 0%, #F2F2F2 100%);
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.20) inset, -2px -4px 12px #FFF inset;
font-weight: 700;
cursor: pointer;
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