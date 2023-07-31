import React, { FC } from 'react';
import styled from 'styled-components';
import { KitWord } from '../types/types';

/**&:hover {
    animation: ${animation1} 500ms linear;
} */
const StyledAnswerWord = styled.p`
min-width: 70px;
height: 30px;
padding: 4px 5px;
text-align: center;
border-radius: 13px;
border: 1px solid #C9C9C9;
background: #FFF;
box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
cursor: grab;



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
  elementInteraction?: (e: React.DragEvent, isOver: boolean) => void;
}


const AnswerWord: FC<AnswerWordProps> = ({ word, dragStartHandler, dropHandler, elementInteraction }) => {
    return (
        <StyledAnswerWord 
            draggable={true}                    
            onDragStart={(e) => dragStartHandler(e, word)}
            onDrop={(e) => dropHandler ? dropHandler(e, word) : {}}
            onDragOver={(e) => elementInteraction ? elementInteraction(e, true) : {}}
            onDragLeave={(e) => elementInteraction ? elementInteraction(e, false) : {}}
            onDragEnd={(e) => elementInteraction ? elementInteraction(e, false) : {}}
        >
            {word.word}
        </StyledAnswerWord>
    );
};

export default AnswerWord;