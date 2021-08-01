import { Square } from "./square";


test('Properties of object returned by Square(5, 8)', () => {
    const testSquare = Square(5,8);
    expect(testSquare).toHaveProperty('coordinates', [5, 8]);
    expect(testSquare).toHaveProperty('isOccupied', false);
    expect(testSquare).toHaveProperty('isHit', false);
});

test('"coordinates" property of Square(2, 6) return value', () => {
    expect(Square(2, 6)).toHaveProperty('coordinates', [2,6]);
});