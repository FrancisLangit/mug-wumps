import { RandomShip } from "./Ship";


test('Coordinates of RandomShip(5) return object not beyond grid', () => {
    const randomShips = [
        RandomShip(5),
        RandomShip(4),
        RandomShip(3),
        RandomShip(3),
        RandomShip(2),
    ];
    for (let i = 0; i < randomShips.length; i++) {
        const ship = randomShips[i];
        const testCoordinate = ship.isVertical ? ship.y : ship.x;
        expect(testCoordinate <= (10 - testCoordinate)).toBe(true);
    }
});