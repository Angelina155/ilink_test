import React, { FC } from 'react';
import styled from 'styled-components';

import { KitWord } from '../types/types';
import AnswerWord from './AnswerWord';

const StyledAnswerField = styled.div`
width: 93%;
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
    currentWord: KitWord;
    elementStartHandler: (e: React.DragEvent, word: KitWord) => void;
    currentAnswer: KitWord[];
    editCurrentAnswer: (answer: KitWord[]) => void;
    currentWordsKit: KitWord[];
    editCurrentWordsKit: (wordsKit: KitWord[]) => void;
    deleteWord: (array: KitWord[], id: number, newElement?: KitWord | null) => KitWord[];
}


const AnswerField: FC<AnswerFieldProps> = ({ currentWord, elementStartHandler, currentAnswer, editCurrentAnswer, currentWordsKit, editCurrentWordsKit, deleteWord }) => {

    function dropHandler(e: React.DragEvent): void {
        e.preventDefault();

        if (!currentAnswer.includes(currentWord)) {
            editCurrentAnswer([...currentAnswer, currentWord]);
            editCurrentWordsKit(deleteWord(currentWordsKit, currentWord.id, {id: currentWord.id, word: ''}));
        }   
    }

    function elementDropHandler(e: React.DragEvent, kitWord: KitWord): void {
        e.preventDefault();
        
        let temp: KitWord[] = Array.from(currentAnswer);
        if (currentAnswer.includes(currentWord)) {
            temp = deleteWord(temp, currentWord.id);      
        }
        else {
            editCurrentWordsKit(deleteWord(currentWordsKit, currentWord.id, {id: currentWord.id, word: ''}));
        }

        temp.splice(temp.indexOf(kitWord) + 1, 0, currentWord);
        editCurrentAnswer(temp);

        e.stopPropagation();
    }


    return (
        <StyledAnswerField
                onDrop={(e) => dropHandler(e)}
                onDragOver={(e) => e.preventDefault()}
             >
            {currentAnswer.map((kitWord, index) => (
                <AnswerWord
                    key={kitWord.id}
                    word={kitWord}
                    dragStartHandler={elementStartHandler}
                    dropHandler={elementDropHandler}
                    elementInteraction={true}
                    animation={null}
                    index={index}
                />
            ))}    
        </StyledAnswerField>
    );
};

export default AnswerField;