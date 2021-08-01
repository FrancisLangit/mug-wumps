import { Square } from "./square";


test('Properties of object returned by Square(5, 8)', () => {
    const square = Square(5,8);
    expect(square).toHaveProperty('coordinates', [5, 8]);
    expect(square).toHaveProperty('isOccupied', false);
    expect(square).toHaveProperty('isHit', false);
});

test('"coordinates" property of return value of Square(2, 6)', () => {
    const testSquare = Square(2, 6);
    expect(testSquare).toHaveProperty('coordinates', [2,6]);
});