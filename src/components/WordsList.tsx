import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { KitWord } from '../types/types';
import AnswerWord from './AnswerWord';

const StyledWordsList = styled.div`
width: 93%; 
margin-top: 10px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 15px 10px;

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
  currentWord: KitWord;
  elementStartHandler: (e: React.DragEvent, word: KitWord) => void;
  currentAnswer: KitWord[];
  editCurrentAnswer: (answer: KitWord[]) => void;
  currentWordsKit: KitWord[];
  editCurrentWordsKit: (wordsKit: KitWord[]) => void;
  deleteWord: (array: KitWord[], id: number, newElement?: KitWord | null) => KitWord[];
}


const WordsList: FC<WordsListProps> = ({ currentWord, elementStartHandler, currentAnswer, editCurrentAnswer, currentWordsKit, editCurrentWordsKit, deleteWord }) => {
  const [animation, setAnimation] = useState<number[] | null>(null);

  function dropHandler(e: React.DragEvent): void {
    e.preventDefault();    

    editCurrentAnswer(deleteWord(currentAnswer, currentWord.id));

    let temp: KitWord[] = Array.from(currentWordsKit);
    const curIndex = temp.findIndex(el => el.id === currentWord.id);
    temp[curIndex] = {id: currentWord.id, word: currentWord.word};
    editCurrentWordsKit(temp);

    let newTemp: KitWord[] = Array.from(temp);
    newTemp.sort((a, b) => {
      if (a.word === '' && b.word !== '')
        return 1;
      if (a.word !== '' && b.word === '')
        return -1;
      return a.id - b.id;
    })

    const newIndex = newTemp.findIndex(el => el.id === currentWord.id);

    setTimeout(() => {setAnimation([curIndex, newIndex])}, 150);
    
    setTimeout(() => {
        editCurrentWordsKit(newTemp);
        setAnimation(null);
    }, 600);
}


    return (
      <StyledWordsList
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => e.preventDefault()}
      >
      {currentWordsKit.map((kitWord, index) => (
        <AnswerWord
          key={kitWord.id}
          word={kitWord}
          dragStartHandler={elementStartHandler}
          animation={animation}
          index={index}
        />
      ))}
      </StyledWordsList>
    );
};

export default WordsList;