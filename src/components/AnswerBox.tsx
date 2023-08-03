import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { KitWord } from '../types/types';
import AnswerField from './AnswerField';
import WordsList from './WordsList';

const StyledAnswerBox = styled.div`
margin-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 25px;
`

interface AnswerBoxProps {
  words: string[];
  rightAnswer: string;
  currentAnswer: KitWord[];
  editCurrentAnswer: (answer: KitWord[]) => void;
}

function shuffleWords(words: string[]): string[] {
    let res: string[] = Array.from(words);

    for (let curIndex: number = res.length - 1; curIndex > 0; curIndex-- ) {
        const newIndex: number = Math.floor(Math.random() * (curIndex + 1));
        const temp = res[curIndex]; res[curIndex] = res[newIndex]; res[newIndex] = temp;
    }

    return res;
}

function deleteWord (array: KitWord[], id: number, newElement: KitWord | null = null) : KitWord[] {
    let temp: KitWord[] = array.filter(el => el.id !== id);

    if (newElement) {
        temp.push(newElement);
    }
    
    return temp;
}

const AnswerBox: FC<AnswerBoxProps> = ({ words, rightAnswer, currentAnswer, editCurrentAnswer }) => {
    const [currentWordsKit, setCurrentWordsKit] = useState<KitWord[]>([]);
    const [currentWord, setCurrentWord] = useState<KitWord>({id: -1, word: ''});

    useEffect(() => {
        prepareWords();
    }, [])

    function prepareWords() : void {
        let temp: KitWord[] = [];
        shuffleWords([...words, ...rightAnswer.split(' ')]).forEach((el, index) => temp.push({id: index, word: el}));
        setCurrentWordsKit(temp);
    }

    function dragStartHandler(e: React.DragEvent, kitWord: KitWord): void {
        setCurrentWord(kitWord);
    }

    
    return (
        <StyledAnswerBox>
            <AnswerField
                currentWord={currentWord}
                elementStartHandler={dragStartHandler}
                currentAnswer={currentAnswer}
                editCurrentAnswer={(answer) => editCurrentAnswer(answer)}
                currentWordsKit={currentWordsKit}
                editCurrentWordsKit={(wordsKit) => setCurrentWordsKit(wordsKit)}
                deleteWord={deleteWord}
            />
            <WordsList
                currentWord={currentWord}
                elementStartHandler={dragStartHandler}
                currentAnswer={currentAnswer}
                editCurrentAnswer={(answer) => editCurrentAnswer(answer)}
                currentWordsKit={currentWordsKit}
                editCurrentWordsKit={(wordsKit) => setCurrentWordsKit(wordsKit)}
                deleteWord={deleteWord}
            />
        </StyledAnswerBox>
    );
};

export default AnswerBox;
