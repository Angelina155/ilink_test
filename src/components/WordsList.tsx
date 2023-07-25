import React, { FC } from 'react';
import styled from 'styled-components';

const StyledWoedsList = styled.div`
width: 93%;
height: 84px;
border: 1px solid black;
`

interface WordsListProps {
  
}


const WordsList: FC<WordsListProps> = ({  }) => {
    return (
        <StyledWoedsList>WordsList</StyledWoedsList>
    );
};

export default WordsList;