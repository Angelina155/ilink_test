import React from 'react';
import styled from 'styled-components';

import TranslationTask from './components/TranslationTask';

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: #F5F5F5;
display: flex;
align-items: center;
`

let translationTask: { task: string; answer: string; extraWords: string[] };
translationTask = {
  task: 'Я хотел бы бургер и стакан воды, пожалуйста',
  answer: 'I would like a burger and a glass of water please',
  extraWords: ['likes', 'to', 'cup']
};

const App = () => {
  return(
    <Wrapper>
      <TranslationTask translationTask={translationTask}/>
    </Wrapper>
  )
};

export default App;