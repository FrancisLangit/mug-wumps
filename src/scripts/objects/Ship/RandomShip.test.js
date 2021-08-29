import { RandomShip } from "./Ship";


const randomShips = [
    RandomShip(5),
    RandomShip(4),
    RandomShip(3),
    RandomShip(3),
    RandomShip(2),
];

test('Length of Ships returned by RandomShip matches arguments', () => {
    expect(randomShips[0].length).toBe(5);
    expect(randomShips[1].length).toBe(4);
    expect(randomShips[2].length).toBe(3);
    expect(randomShips[3].length).toBe(3);
    expect(randomShips[4].length).toBe(2);
});

test('Coordinates of RandomShip(5) return object not beyond grid', () => {
    for (let i = 0; i < randomShips.length; i++) {
        const ship = randomShips[i];
        const testCoordinate = ship.isVertical ? ship.y : ship.x;
        expect(testCoordinate <= (10 - testCoordinate)).toBe(true);
    }
});