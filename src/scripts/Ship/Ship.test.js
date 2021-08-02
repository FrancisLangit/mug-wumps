import { Ship } from "./Ship";
import { Square } from "../Square/square";

// hits array
// hit() method - should set target hit boolean in hits to true
// isSunk() - returns true if all hits in hits array is true

test('"hits" array of object returned by Ship(5, 6, 3)', () => {
    const ship = Ship(5, 6, 3);
    const expectedShipHits = [false, false, false];
    expect(ship).toHaveProperty('hits', expectedShipHits);
});

test('"hits" array of object returned by Ship(1, 1, 5, true)', () => {
    const ship = Ship(1, 1, 5, true);
    const expectedShipHits = [false, false, false, false, false];
    expect(ship).toHaveProperty('hits', expectedShipHits);
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

// test('isSunk() method of object returned by Ship(2, 1, 2)', () => {
//     const testShip = Ship(2, 1, 2);
//     testShip.hit(0);
//     testShip.hit(1);
//     expect(testShip.isSunk()).toEqual(true);
// });

// test('isSunk() method of object returned by Ship(4, 4, 3, true)', () => {
//     const testShip = Ship(4, 4, 3, true);
//     testShip.hit(0);
//     testShip.hit(1);
//     testShip.hit(2);
//     expect(testShip.isSunk()).toEqual(true);
// });