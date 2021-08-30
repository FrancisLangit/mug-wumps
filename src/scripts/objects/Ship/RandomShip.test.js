import { RandomShip } from "./Ship";


const randomShipLength = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
const randomShip = RandomShip(randomShipLength);

test('Length of Ships returned by RandomShip matches arguments', () => {
    expect(randomShip.length).toBe(randomShipLength);
});

test('Coordinates of RandomShip return object not beyond grid', () => {
    const limitedCoordinate = randomShip.isVertical ? randomShip.y : randomShip.x;
    expect(limitedCoordinate <= 10 - randomShip.length).toBe(true);
});