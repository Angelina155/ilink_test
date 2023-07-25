import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTaskWord = styled.p`
border-bottom: 1px dashed #000080;
`

interface TaskWordProps {
  word: string;
}


const TaskWord: FC<TaskWordProps> = ({ word }) => {
    return (
        <StyledTaskWord>{word}</StyledTaskWord>
    );
};

export default TaskWord;