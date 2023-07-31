import React, { FC } from 'react';
import styled from 'styled-components';

import { KitWord } from '../types/types';
import AnswerWord from './AnswerWord';

const StyledAnswerField = styled.div`
width: 95%;
height: 92px;
margin-top: 20px;
border-top: 1px solid black;
border-bottom: 1px solid black;
display: flex;
gap: 50px 10px;
flex-wrap: wrap;
`

interface AnswerFieldProps {
    currentAnswer: KitWord[];
    elementStartHandler: (e: React.DragEvent, word: KitWord) => void;
    dropHandler: (e: React.DragEvent) => void;
    elementDropHandler: (e: React.DragEvent, word: KitWord) => void;
    elementInteraction: (e: React.DragEvent, isOver: boolean) => void;
}


const AnswerField: FC<AnswerFieldProps> = ({ currentAnswer, elementStartHandler, dropHandler, elementDropHandler, elementInteraction  }) => {

    return (
        <StyledAnswerField
                onDrop={(e) => dropHandler(e)}
                onDragOver={(e) => elementInteraction(e, true)}
             >
            {currentAnswer.map(kitWord => (
                <AnswerWord
                    key={kitWord.id}
                    word={kitWord}
                    dragStartHandler={elementStartHandler}
                    dropHandler={elementDropHandler}
                    elementInteraction={elementInteraction}
                />
            ))}    
        </StyledAnswerField>
    );
};

export default AnswerField;