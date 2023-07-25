import React, { FC } from 'react';
import styled from 'styled-components';

/*import RobotoBold from "./fonts/roboto-condensed-v19-latin-regular.woff2";*/

import TaskWord from './TaskWord';


const StyledTaskContainer = styled.div`
position: relative;
width: 65%;
align-self: flex-start;
`

const StyledTaskBorder = styled.svg`
position: absolute;
width: 100%;
top: 0;
left: 0;
`

const StyledTaskSentence = styled.div`
position: absolute;
top: 10px;
left: 40px;
height: 100px;
width: 88%;
display: flex;
align-content: center;
gap: 10px;
flex-wrap: wrap;
`

interface TaskProps {
    task: string;
}


const Task: FC<TaskProps> = ({  task }) => {
    return (

        <StyledTaskContainer>
            <StyledTaskBorder xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 92" fill="none">
                <path d="M19.9254 63.2936L1.73257 81.2645C1.09664 81.8926 1.54146 82.9759 2.43533 82.9759H19.8214C20.043 82.9759 20.2226 83.1555 20.2226 83.3771C20.2226 87.5871 23.6355 91 27.8455 91H287C297.493 91 306 82.4934 306 72V20C306 9.50659 297.493 1 287 1H39.2226C28.7292 1 20.2226 9.50659 20.2226 20V62.5822C20.2226 62.8495 20.1156 63.1057 19.9254 63.2936Z" stroke="#252525" strokeWidth="2"/>
            </StyledTaskBorder>
            <StyledTaskSentence>
                {task.split(' ').map((word, index) => (
                    <TaskWord key={index} word={word}/>
                ))}
            </StyledTaskSentence>
        </StyledTaskContainer>
    );
};

export default Task;