import { reverseString } from '../index.js';

describe (('Reverse string'), () => {
    it (('expand the incoming string'), () => {
        expect(reverseString('jiu-jitsu')).toBe('ustij-uij');
        expect(reverseString(123)).toBe('321');
        expect(reverseString(true)).toBe('eurt');
    });
});