import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
width: 93%;
height: 68px;
border-radius: 88px;
border: none;
background: linear-gradient(135deg, #FFF 0%, #F2F2F2 100%);
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.20) inset, -2px -4px 12px #FFF inset;
margin-top: 20px;
font-weight: 700;
cursor: pointer;
`

interface ButtonProps {
  
}


const Button: FC<ButtonProps> = ({  }) => {
    return (
        <StyledButton>Проверить</StyledButton>
    );
};

export default Button;