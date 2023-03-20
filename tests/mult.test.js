const mult = require('../src/mult');

it('should return correct result of multiplication operation', () => {
    const result = mult(2, 5);
    expect(result).toBe(10);
})