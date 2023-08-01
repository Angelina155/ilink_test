import React, { FC } from 'react';
import styled from 'styled-components';

import { KitWord } from '../types/types';
import AnswerWord from './AnswerWord';

const StyledAnswerField = styled.div`
width: 95%;
height: 92px;
margin-top: 20px;
padding-top: 10px;
border-top: 1px solid #4B4B4B;
border-bottom: 1px solid #4B4B4B;
display: flex;
gap: 10px 10px;
flex-wrap: wrap;
flex-direction: center;
position: relative;

&:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    background-color: #4B4B4B; 

}

@media (max-width: 960px) {
    gap: 10px 7px;
}
@media (max-width: 550px) {
    gap: 10px 4px;
}
@media (max-width: 365px) {
    gap: 10px 2px;
}
`

interface AnswerFieldProps {
    currentAnswer: KitWord[];
    elementStartHandler: (e: React.DragEvent, word: KitWord) => void;
    dropHandler: (e: React.DragEvent) => void;
    elementDropHandler: (e: React.DragEvent, word: KitWord) => void;
}


const AnswerField: FC<AnswerFieldProps> = ({ currentAnswer, elementStartHandler, dropHandler, elementDropHandler  }) => {

    return (
        <StyledAnswerField
                onDrop={(e) => dropHandler(e)}
                onDragOver={(e) => e.preventDefault()}
             >
            {currentAnswer.map(kitWord => (
                <AnswerWord
                    key={kitWord.id}
                    word={kitWord}
                    dragStartHandler={elementStartHandler}
                    dropHandler={elementDropHandler}
                    elementInteraction={true}
                />
            ))}    
        </StyledAnswerField>
    );
};

export default AnswerField;