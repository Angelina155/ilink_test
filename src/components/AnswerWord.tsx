import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { KitWord } from '../types/types';

/**&:hover {
    animation: ${animation1} 500ms linear;
} */
const StyledAnswerWord = styled.p<{$isOver: boolean}>`
min-width: 70px;
height: 30px;
padding: 4px 5px;
text-align: center;
border-radius: 13px;
border: 1px solid #C9C9C9;
background: #FFF;
cursor: grab;


${props => props.$isOver 
  ? css`
    box-shadow: 6px 0 10px #C4C9BD;
    margin-right: 20px;
  `
  : css`
    box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
    margin-right: 0;
  `
}

@media (max-width: 1480px) {
    min-width: 60px;
  }
  @media (max-width: 1160px) {
    min-width: 55px;
  }
  @media (max-width: 925px) {
    min-width: 48px;
  }
  @media (max-width: 740px) {
    min-width: 42px;
  }
  @media (max-width: 604px) {
    min-width: 35px;
  }
  @media (max-width: 421px) {
    min-width: 30px;
  }
  @media (max-width: 355px) {
    min-width: 28px;
  }
`

interface AnswerWordProps {
  word: KitWord;
  dragStartHandler: (e: React.DragEvent, word: KitWord) => void;
  dropHandler?: (e: React.DragEvent, word: KitWord) => void;
  elementInteraction?: boolean;
}

const AnswerWord: FC<AnswerWordProps> = ({ word, dragStartHandler, dropHandler, elementInteraction }) => {
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