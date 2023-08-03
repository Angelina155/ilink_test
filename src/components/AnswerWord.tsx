import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { KitWord } from '../types/types';
import { WordsKitAnimation } from '../styles/animation';


const StyledAnswerWord = styled.p<{$isOver: boolean, $animation: number[] | null, $curWordIndex: number}>`
min-width: 70px;
height: 30px;
padding: 4px 5px;
border-radius: 13px;
border: 1px solid #C9C9C9;
text-align: center;
background: #FFF;
cursor: grab;

animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 70, 30, 10, 15)} 550ms ease-in-out;

${props => props.$isOver 
  ? css`
    margin-right: 20px;
    box-shadow: 6px 0 10px #C4C9BD;
  `
  : css`
    margin-right: 0;
    box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  `
}

@media (max-width: 1480px) {
    min-width: 60px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 60, 30, 10, 15)} 550ms ease-in-out;
  }
  @media (max-width: 1160px) {
    min-width: 55px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 55, 30, 10, 15)} 550ms ease-in-out;
  }
  @media (max-width: 925px) {
    min-width: 48px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 48, 30, 7, 10)} 550ms ease-in-out;
  }
  @media (max-width: 740px) {
    min-width: 42px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 42, 30, 7, 10)} 550ms ease-in-out;
  }
  @media (max-width: 604px) {
    min-width: 35px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 35, 30, 7, 10)} 550ms ease-in-out;
  }
  @media (max-width: 960px) {
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 35, 30, 4, 10)} 550ms ease-in-out;
  }
  @media (max-width: 421px) {
    min-width: 30px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 30, 30, 4, 10)} 550ms ease-in-out;
  }
  @media (max-width: 355px) {
    min-width: 28px;
    animation: ${props => WordsKitAnimation(props.$animation, props.$curWordIndex, 28, 30, 2, 10)} 550ms ease-in-out;
  }
`

interface AnswerWordProps {
  word: KitWord;
  dragStartHandler: (e: React.DragEvent, word: KitWord) => void;
  dropHandler?: (e: React.DragEvent, word: KitWord) => void;
  elementInteraction?: boolean;
  animation: number[] | null;
  index: number;
}


const AnswerWord: FC<AnswerWordProps> = ({ word, dragStartHandler, dropHandler, elementInteraction, animation, index }) => {
  const [isOver, setIsOver] = useState<boolean>(false)

  function elementDropHandler (e: React.DragEvent, word: KitWord): void {
    setIsOver(false);
    if (dropHandler) {
      dropHandler(e, word);
    }
  }

  
    return (
        <StyledAnswerWord 
            $isOver={isOver}
            $animation={animation}
            $curWordIndex={index}
            draggable={true}                    
            onDragStart={(e) => dragStartHandler(e, word)}
            onDrop={(e) => elementDropHandler(e, word)}
            onDragOver={() => elementInteraction ? setIsOver(true) : {}}
            onDragLeave={() => elementInteraction ? setIsOver(false) : {}}
            onDragEnd={() => elementInteraction ? setIsOver(false) : {}}
        >
            {word.word}
        </StyledAnswerWord>
    );
};

export default AnswerWord;