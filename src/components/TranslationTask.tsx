import React, { FC } from 'react';
import styled from 'styled-components';

import AnswerField from './AnswerField';
import WordsList from './WordsList';
import AnswerResult from './AnswerResult';
import Button from './Button';
import Title from './Title';
import TaskBox from './TaskBox';

const StyledContainer = styled.section`
width: 40%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 40px 0;
`



interface TranslationTaskProps {
    translationTask: {
        task: string;
        answer: string;
        extraWords: string[];
    };
  }  

const TranslationTask: FC<TranslationTaskProps> = ({ translationTask}) => {
    return(
        <StyledContainer>
            <Title text='Переведите фразу'/>
            <TaskBox task={translationTask.task}/>
            <AnswerField/>
            <WordsList/>
            {/*<AnswerResult/>*/}
            <Button/>
        </StyledContainer>
  )
};

export default TranslationTask;