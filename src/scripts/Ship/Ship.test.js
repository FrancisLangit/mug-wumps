import { Ship } from "./Ship";
import { Square } from "../Square/square";


test('"squares" property of object returned by Ship(5, 6, 3)', () => {
    const testShip = Ship(5, 6, 3);
    const expectedSquares = [Square(5, 6), Square(6, 6), Square(7, 6)];
    expect(testShip).toHaveProperty('squares', expectedSquares);
});

test('"squares" property of object returned by Ship(1, 1, 5, true)', () => {
    const testShip = Ship(1, 1, 5, true);
    const expectedSquares = [
        Square(1, 1), Square(1, 2), Square(1, 3), Square(1, 4), Square(1, 5)];
    expect(testShip).toHaveProperty('squares', expectedSquares);
});

test('hit() method of object returned by Ship(2, 3, 2)', () => {
    const testShip = Ship(2, 3, 2);
    testShip.hit(1);
    expect(testShip.squares[1]).toHaveProperty('isHit', true);
});

test('hit() method of object returned by Ship(3, 0, 4, true)', () => {
    const testShip = Ship(3, 0, 4, true);
    testShip.hit(3);
    expect(testShip.squares[3]).toHaveProperty('isHit', true);
});