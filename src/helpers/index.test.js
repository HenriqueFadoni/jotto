import { getLetterMatchCounter } from './index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCounter('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCounter('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test('returns correct count when there are duplicated letters in the guess', () => {
        const letterMatchCount = getLetterMatchCounter('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });
});
