import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { KitWord, Task } from '../types/types';
import Title from './Title';
import TaskBox from './TaskBox';
import AnswerBox from './AnswerBox';
import CheckButton from './CheckButton';
import AnswerResult from './AnswerResult';

const reactSpeech = require('react-speech-kit');

const StyledContainer = styled.section`
width: 40%;
max-width: 650px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 25px 0;

@media (max-width: 1290px) {
  width: 45%;
}
@media (max-width: 1065px) {
  width: 50%;
}
@media (max-width: 820px) {
  width: 55%;
}
@media (max-width: 660px) {
  width: 60%;
}
@media (max-width: 521px) {
  width: 65%;
}
@media (max-width: 480px) {
  width: 70%;
}
@media (max-width: 390px) {
  width: 75%;
}
@media (max-width: 365px) {
  width: 80%;
}
`

interface TranslationTaskProps {
    translationTask: Task;
  }  


const TranslationTask: FC<TranslationTaskProps> = ({ translationTask }) => {
  const [currentAnswer, setCurrentAnswer] = useState<KitWord[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(false);

  const {speak, voices} = reactSpeech.useSpeechSynthesis();

  function checkAnswer (currentAnswer: KitWord[], rightAnswer: string): void {
    setIsCompleted(true);

    const res: boolean = currentAnswer.map(el => el.word).join(' ') === rightAnswer;
    setIsRight(res);

    if (res) {
      speak({ text: rightAnswer, voice: voices[6] })
    }
  }


  return(
    <StyledContainer>
      <Title text='Переведите фразу'/>
      <TaskBox task={translationTask.task}/>
      <AnswerBox words={translationTask.extraWords} rightAnswer={translationTask.answer} currentAnswer={currentAnswer} editCurrentAnswer={(answer) => setCurrentAnswer(answer)}/>
      {isCompleted 
        ? <AnswerResult isRight={isRight}/> 
        : <></>
      }
      <CheckButton checkAnswer={() => checkAnswer(currentAnswer, translationTask.answer)}/>
    </StyledContainer>
  )
};

export default TranslationTask;