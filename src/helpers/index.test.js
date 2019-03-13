import { getLetterMatchCount } from './index';

xdescribe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns correct count when there are no matching letters', () => {

    });
    test('returns correct count when there are duplicated letters in the guess', () => {

    });
});
