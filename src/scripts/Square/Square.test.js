import { Square } from "./square";


test('Object returned by calling Square(5, 8)', () => {
    const testSquare = Square(5,8);
    const expectedSquare = {
        'coordinates': [5, 8],
        'isOccupied': false,
        'isHit': false,
    } 
    expect(testSquare).toEqual(expectedSquare);
});

test('Square.coordinates of return value of Square(2, 6)', () => {
    const testSquare = Square(2, 6);
    const expectedCoordinates = [2, 6];
    expect(testSquare.coordinates).toEqual(expectedCoordinates);
});