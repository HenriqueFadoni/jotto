import { getLetterMatchCounter } from '../../helpers/index';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
};

// export function correctGuess() {
//     return {
//         type: actionTypes.CORRECT_GUESS
//     };
// }

export const guessWord = guessedWord => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCounter(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount
            }
        });

        if(guessedWord === secretWord) {
            dispatch({ type: actionTypes.CORRECT_GUESS });
        }
    };
};