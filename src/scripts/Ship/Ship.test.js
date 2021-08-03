import { Ship } from "./Ship";


test('Properties of object returned by Ship(5, 6, 3)', () => {
    const ship = Ship(5, 6, 3);
    expect(ship).toHaveProperty('x', 5);
    expect(ship).toHaveProperty('y', 6);
    expect(ship).toHaveProperty('length', 3);
    expect(ship).toHaveProperty('isVertical', false);
    expect(ship).toHaveProperty('hits', [false, false, false]);
});

test('Properties of object returned by Ship(1, 1, 5, true)', () => {
    const ship = Ship(1, 1, 5, true);
    expect(ship).toHaveProperty('x', 1);
    expect(ship).toHaveProperty('y', 1);
    expect(ship).toHaveProperty('length', 5);
    expect(ship).toHaveProperty('isVertical', true);
    expect(ship).toHaveProperty('hits', [false, false, false, false, false]);
});

test('hit() method of object returned by Ship(2, 3, 2)', () => {
    const ship = Ship(2, 3, 2);
    ship.hit(1);
    expect(ship.hits[1]).toEqual(true);
});

test('hit() method of object returned by Ship(3, 0, 4, true)', () => {
    const ship = Ship(3, 0, 4, true);
    ship.hit(3);
    expect(ship.hits[3]).toEqual(true);
});

test('isSunk() method of object returned by Ship(2, 1, 2)', () => {
    const ship = Ship(2, 1, 2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toEqual(true);
});

test('isSunk() method of object returned by Ship(4, 4, 3, true)', () => {
    const ship = Ship(4, 4, 3, true);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toEqual(true);
});

test('getCoordinates() method of Ship(3, 3, 4) return object', () => {
    const ship = Ship(3, 3, 4);
    expect(ship.getCoordinates()).toEqual([[3, 3], [4, 3], [5, 3], [6, 3]]);
});

test('getCoordinates() method of Ship(1, 2, 3, true) return object', () => {
    const ship = Ship(1, 2, 3, true);
    expect(ship.getCoordinates()).toEqual([[1, 2], [1, 3], [1, 4]]);
});