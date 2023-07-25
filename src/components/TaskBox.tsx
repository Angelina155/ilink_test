import React, { FC } from 'react';
import styled from 'styled-components';

import Task from './Task';

const StyledTaskBox = styled.div`
width: 95%;
display: flex;
justify-content: center;
align-items: center;
`

const StyledAvatarImg = styled.div`
width: 40%;
max-width: 185px;
max-height: 220px;
padding-top: 20px;
`

interface TaskBoxProps {
    task: string;
}  

const TaskBox: FC<TaskBoxProps> = ({ task }) => {
    return(
        <StyledTaskBox>
            <StyledAvatarImg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 200" fill="none">
                    <circle cx="93.3262" cy="57" r="57" fill="#6C6C6C"/>
                    <path d="M185.567 187.526C186.407 194.1 180.954 199.5 174.326 199.5H11.3261C4.69873 199.5 -0.754645 194.1 0.0857519 187.526C5.9642 141.542 45.2445 106 92.8261 106C140.408 106 179.688 141.542 185.567 187.526Z" fill="#6C6C6C"/>
                </svg>      
            </StyledAvatarImg>
            <Task task={task}/>
        </StyledTaskBox>
    )
};

export default TaskBox;