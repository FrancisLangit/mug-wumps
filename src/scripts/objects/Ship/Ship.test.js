import { Ship } from "./Ship";


test('Properties of object returned by Ship(5, 6, 3)', () => {
    const ship = Ship(5, 6, 3);
    
    expect(ship).toHaveProperty('x', 5);
    expect(ship).toHaveProperty('y', 6);
    expect(ship).toHaveProperty('length', 3);
    expect(ship).toHaveProperty('isVertical', false);
    expect(ship).toHaveProperty('hits', [false, false, false]);

    expect(ship).toHaveProperty('hit');
    expect(ship).toHaveProperty('isSunk');
    expect(ship).toHaveProperty('getPositions');
    expect(ship).toHaveProperty('reset');
});

test('isVertical of object returned by Ship(1, 1, 5, true) is true', () => {
    const ship = Ship(1, 1, 5, true);
    expect(ship).toHaveProperty('isVertical', true);
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

test('getPositions() method of Ship(3, 3, 4) return object', () => {
    const ship = Ship(3, 3, 4);
    expect(ship.getPositions()).toEqual([[3, 3], [4, 3], [5, 3], [6, 3]]);
});

test('getPositions() method of Ship(1, 2, 3, true) return object', () => {
    const ship = Ship(1, 2, 3, true);
    expect(ship.getPositions()).toEqual([[1, 2], [1, 3], [1, 4]]);
});

test('reset() method of Ship(0, 0, 1) return object', () => {
    const ship = Ship(0, 0, 1);
    ship.hit(0);
    ship.reset();
    expect(ship.isSunk()).toEqual(false);
});