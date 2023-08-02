import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledAnswerResult = styled.h2<{$isRight: boolean}>`
font-size: 24px;
text-shadow: 1px 2px 2px rgba(91, 13, 13, 0.50), -1px -2px 2px #FFF;

${props => props.$isRight 
  ? css`color: green;`
  : css`color: #F00;`
}
`

interface AnswerResultProps {
  isRight: boolean;
}


const AnswerResult: FC<AnswerResultProps> = ({ isRight }) => {
    return (
        <StyledAnswerResult $isRight={isRight}>{isRight ? "Отлично!" : "Попробуйте еще раз!"}</StyledAnswerResult>
    );
};

export default AnswerResult;