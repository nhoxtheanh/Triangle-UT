import {isOddNumber, countEvenNumbers} from './triangle.js';
const expect = chai.expect;

describe('function isOddNumber()', () => {
    it('should be true if 3', () => {
        const result = isOddNumber(3);
        expect(result).to.be.true;
    });

    it('should be true if 2', () => {
        const result = isOddNumber(2);
        expect(result).to.be.false;
    });
});


describe('function countEvenNumbers()', () => {
    it('should equal 1 if [1, 2, 3]', () => {
        const result = countEvenNumbers([1, 2, 3]);
        expect(result).to.equal(1);
    });
});