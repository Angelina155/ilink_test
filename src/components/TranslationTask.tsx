import React, { FC } from 'react';
import styled from 'styled-components';

import AnswerField from './AnswerField';
//import AnswerWordsList from './AnswerWordsList';
import AnswerResult from './AnswerResult';
import Button from './Button';
import Title from './Title';
import TaskBox from './TaskBox';
import AnswerBox from './AnswerBox';

import { Task } from '../types/types';

const StyledContainer = styled.section`
width: 40%;
max-width: 650px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 40px 0;
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

const TranslationTask: FC<TranslationTaskProps> = ({ translationTask}) => {
    return(
        <StyledContainer>
            <Title text='Переведите фразу'/>
            <TaskBox task={translationTask.task}/>
            <AnswerBox words={translationTask.extraWords}/>
            {/*<AnswerResult/>*/}
            <Button/>
        </StyledContainer>
  )
};

export default TranslationTask;