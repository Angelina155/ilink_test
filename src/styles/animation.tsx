import { css, keyframes } from 'styled-components';

const rowWordsQuantity = 7;

export const WordsKitAnimation = (replaceIndexes: number[] | null, curWordIndex: number, width: number, height: number, gapW: number, gapH: number) => keyframes`
0% {
    transform: translate(0, 0);    
}
100% {
  ${!replaceIndexes ?
      css`transform: translate(0, 0);`
    : 
    curWordIndex === replaceIndexes[0] ?                                               //если переставляется текущее слово
        !(replaceIndexes[1] < rowWordsQuantity && replaceIndexes[0] >= rowWordsQuantity) ?  //если перестановка в рамках одной строки
          css`transform: translate(${(width + gapW) * (replaceIndexes[1] - replaceIndexes[0])}px, 0);`    //то сдвиг влево
        :                                                                           //иначе сдвиг вверх и внужную сторону
          css`
            transform: translate(${(width + gapW) * (replaceIndexes[1] + rowWordsQuantity - replaceIndexes[0])}px, -${height + gapH}px);
          `
      :                                                                           //иначе
        !(replaceIndexes[1] < rowWordsQuantity && replaceIndexes[0] >= rowWordsQuantity) ?  //если перестановка в рамках одной строки    
        curWordIndex >= replaceIndexes[1] ?                                                //если текущее слово после переставляемого
            css`transform: translate(${(width + gapW)}px, 0);`                                           //сдвиг на одну позицию вправо
          :                                                                           //иначе без сдвига
            css`transform: translate(0, 0);`
        :                                                                           //иначе
        curWordIndex === rowWordsQuantity - 1 ?                                        //если элемент последний в первом ряду
                                                                                        //перестановка влево и вниз
            css`
              transform: translate(${((width + gapW)) * (1 - rowWordsQuantity)}px, ${height + gapH}px);
            `
          :                                                                           //иначе 
          curWordIndex >= replaceIndexes[1] ?                                                //если текущее слово после переставляемого
              css`transform: translate(${(width + gapW)}px, 0);`                                         //сдвиг на одну позицию вправо
            :                                                                           //иначе без сдвига
              css`transform: translate(0, 0);`
  }
    
}
`