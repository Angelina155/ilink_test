import React, { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { KitWord } from '../types/types';
import AnswerField from './AnswerField';
import WordsList from './WordsList';
import AnswerWord from './AnswerWord';

/*const animation1 = keyframes`
0% {
    transform: translateX(0);
}
100% {
    transform: translateX(70px);
}
`*/

const StyledAnswerBox = styled.div`
`

interface AnswerBoxProps {
  words: string[];
}

const AnswerBox: FC<AnswerBoxProps> = ({ words }) => {
    const [currentWordsKit, setCurrentWordsKit] = useState<KitWord[]>([]);
    const [currentAnswer, setCurrentAnswer] = useState<KitWord[]>([]);
    const [currentWord, setCurrentWord] = useState<KitWord>({id: -1, word: ''});

    useEffect(() => {
        prepareWords();
    }, [])

    function shuffleWords(words: string[]): string[] {
        let res: string[] = Array.from(words);

        for (let curIndex: number = res.length - 1; curIndex > 0; curIndex-- ) {
            const newIndex: number = Math.floor(Math.random() * (curIndex + 1));
            const temp = res[curIndex]; res[curIndex] = res[newIndex]; res[newIndex] = temp;
        }

        return res
    }

    function prepareWords() : void {
        const temp: KitWord[] = [];
        shuffleWords(words).forEach((el, index) => temp.push({id: index, word: el}));
        setCurrentWordsKit(temp);
    }

    function dragStartHandler(e: React.DragEvent, kitWord: KitWord): void {
        setCurrentWord(kitWord);
    }

    function elementInteraction(e: React.DragEvent, isOver: boolean): void {
        e.preventDefault();
        const target = e.target as HTMLElement;
        if (target.nodeName === 'P') {
            target.style.boxShadow = isOver ? '6px 0 10px #C4C9BD' : '0px 8px 4px -6px rgba(0, 0, 0, 0.25)';
            target.style.marginRight = isOver ? '20px' : '0';
        }
    }
    
    function dragOverBoxHandler(e: React.DragEvent): void {
        e.preventDefault();
    }

    function deleteWord (array: KitWord[], id: number, newElement: KitWord | null = null) : KitWord[] {
        let temp: KitWord[] = array.filter(el => el.id !== id);

        if (newElement) {
            temp.push(newElement);
        }
        
        return temp
    }

    function answerFieldDropHandler(e: React.DragEvent): void {
        e.preventDefault();

        if (!currentAnswer.includes(currentWord)) {
            setCurrentAnswer([...currentAnswer, currentWord]);
            setCurrentWordsKit(deleteWord(currentWordsKit, currentWord.id, {id: currentWord.id, word: ''}));
        }
        
    }
    function kitDropHandler(e: React.DragEvent): void {
        e.preventDefault();    

        setCurrentAnswer(deleteWord(currentAnswer, currentWord.id));

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
        
        elementInteraction(e, false);

        let temp: KitWord[] = Array.from(currentAnswer);
        if (currentAnswer.includes(currentWord)) {
            temp = deleteWord(temp, currentWord.id);      
        }
        else {
            setCurrentWordsKit(deleteWord(currentWordsKit, currentWord.id, {id: currentWord.id, word: ''}));
        }

        temp.splice(temp.indexOf(kitWord) + 1, 0, currentWord);
        setCurrentAnswer(temp);

        e.stopPropagation();
    }

    return (
        <StyledAnswerBox>
            <AnswerField
                currentAnswer={currentAnswer}
                elementStartHandler={dragStartHandler}
                dropHandler={answerFieldDropHandler}
                elementDropHandler={elementDropHandler}
                elementInteraction={elementInteraction}
            />
            <WordsList
                currentWordsKit={currentWordsKit}
                elementStartHandler={dragStartHandler}
                dragOverHandler={dragOverBoxHandler}
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