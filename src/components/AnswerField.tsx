import React, { FC } from 'react';
import styled from 'styled-components';

const StyledAnswerField = styled.div`
width: 95%;
height: 90px;
border: 1px solid black;
`

interface AnswerFieldProps {
  
}


const AnswerField: FC<AnswerFieldProps> = ({  }) => {
    return (
        <StyledAnswerField>AnswerField</StyledAnswerField>
    );
};

export default AnswerField;