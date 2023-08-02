import React, { FC } from 'react';
import styled from 'styled-components';

import AnswerWord from './AnswerWord';
import { KitWord } from '../types/types';

const StyledWordsList = styled.div`
width: 93%; 
display: flex;
gap: 15px 10px;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 10px;
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

interface WordsListProps {
  currentWordsKit: KitWord[];
  elementStartHandler: (e: React.DragEvent, word: KitWord) => void;
  dropHandler: (e: React.DragEvent) => void;
}


const WordsList: FC<WordsListProps> = ({ currentWordsKit, elementStartHandler, dropHandler }) => {
    return (
      <StyledWordsList
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => e.preventDefault()}
      >
      {currentWordsKit.map(kitWord => (
        <AnswerWord
          key={kitWord.id}
          word={kitWord}
          dragStartHandler={elementStartHandler}
        />
      ))}
      </StyledWordsList>
    );
};

export default WordsList;