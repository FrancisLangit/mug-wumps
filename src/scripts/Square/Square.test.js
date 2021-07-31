import { Square } from "./square";


test('Object returned by Square() factory function', () => {
    const testSquare = Square(5,8);
    const expectedSquare = {
        'coordinates': [5, 8],
        'isOccupied': false,
        'isHit': false,
    } 
    expect(testSquare).toEqual(expectedSquare);
});