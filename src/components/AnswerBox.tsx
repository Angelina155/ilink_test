import React, { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { KitWord } from '../types/types';
import AnswerField from './AnswerField';
import WordsList from './WordsList';
import CheckButton from './CheckButton';

/*const animation1 = keyframes`
0% {
    transform: translateX(0);
}
100% {
    transform: translateX(70px);
}
`*/

const StyledAnswerBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 25px;
margin-bottom: 30px;
`

interface AnswerBoxProps {
  words: string[];
  currentAnswer: KitWord[];
  editCurrentAnswer: (answer: KitWord[]) => void;
}

function shuffleWords(words: string[]): string[] {
    let res: string[] = Array.from(words);

    for (let curIndex: number = res.length - 1; curIndex > 0; curIndex-- ) {
        const newIndex: number = Math.floor(Math.random() * (curIndex + 1));
        const temp = res[curIndex]; res[curIndex] = res[newIndex]; res[newIndex] = temp;
    }

    return res
}

function deleteWord (array: KitWord[], id: number, newElement: KitWord | null = null) : KitWord[] {
    let temp: KitWord[] = array.filter(el => el.id !== id);

    if (newElement) {
        temp.push(newElement);
    }
    
    return temp
}


const AnswerBox: FC<AnswerBoxProps> = ({ words, currentAnswer, editCurrentAnswer }) => {
    const [currentWordsKit, setCurrentWordsKit] = useState<KitWord[]>([]);
    const [currentWord, setCurrentWord] = useState<KitWord>({id: -1, word: ''});

    useEffect(() => {
        prepareWords();
    }, [])


    function prepareWords() : void {
        const temp: KitWord[] = [];
        shuffleWords(words).forEach((el, index) => temp.push({id: index, word: el}));
        setCurrentWordsKit(temp);
    }

    function dragStartHandler(e: React.DragEvent, kitWord: KitWord): void {
        setCurrentWord(kitWord);
    }

    function answerFieldDropHandler(e: React.DragEvent): void {
        e.preventDefault();

        if (!currentAnswer.includes(currentWord)) {
            editCurrentAnswer([...currentAnswer, currentWord]);
            setCurrentWordsKit(deleteWord(currentWordsKit, currentWord.id, {id: currentWord.id, word: ''}));
        }   
    }

    function kitDropHandler(e: React.DragEvent): void {
        e.preventDefault();    

        editCurrentAnswer(deleteWord(currentAnswer, currentWord.id));

        let temp: KitWord[] = Array.from(currentWordsKit);
        let curIndex = temp.findIndex(el => el.id === currentWord.id);
        temp[curIndex] = {id: currentWord.id, word: currentWord.word};
        setCurrentWordsKit(temp);

        setTimeout(() => {
            setCurrentWordsKit([...temp.sort((a, b) => {
                if (a.word === '' && b.word !== '')
                    return 1
                if (a.word !== '' && b.word === '')
                    return -1
                return a.id - b.id
            })]);
        }, 500);
    }

    function elementDropHandler(e: React.DragEvent, kitWord: KitWord): void {
        e.preventDefault();
        
        let temp: KitWord[] = Array.from(currentAnswer);
        if (currentAnswer.includes(currentWord)) {
            temp = deleteWord(temp, currentWord.id);      
        }
        else {
            setCurrentWordsKit(deleteWord(currentWordsKit, currentWord.id, {id: currentWord.id, word: ''}));
        }

        temp.splice(temp.indexOf(kitWord) + 1, 0, currentWord);
        editCurrentAnswer(temp);

        e.stopPropagation();
    }

    return (
        <StyledAnswerBox>
            <AnswerField
                currentAnswer={currentAnswer}
                elementStartHandler={dragStartHandler}
                dropHandler={answerFieldDropHandler}
                elementDropHandler={elementDropHandler}
            />
            <WordsList
                currentWordsKit={currentWordsKit}
                elementStartHandler={dragStartHandler}
                dropHandler={kitDropHandler}
            />
        </StyledAnswerBox>
    );
};

export default AnswerBox;







































/*import React, { FC, useState } from 'react';
import styled from 'styled-components';
import AnswerField from './AnswerField';
import AnswerWordsList from './AnswerWordsList';

const StyledAnswerBox = styled.div`

`

interface AnswerBoxProps {
  words: string[];
}


const AnswerBox: FC<AnswerBoxProps> = ({ words }) => {
    const [currentAnswer, setCurrentAnswer] = useState<string[]>([])

    function pushToAnswer(word: string): void {
        currentAnswer.push(word)
        setCurrentAnswer(currentAnswer)
    }


    return (
        <StyledAnswerBox>
            <AnswerField/>
            <AnswerWordsList words={words}/>
        </StyledAnswerBox>
    );
};

export default AnswerBox;*/