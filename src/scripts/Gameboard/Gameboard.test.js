import { Gameboard } from './Gameboard'; 
import { Ship } from '../Ship/Ship';


test('Properties of object returned by Gameboard()', () => {
    const gameboard = Gameboard();
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('misses', []);
    expect(gameboard).toHaveProperty('addShip');
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('isAllShipsSunk');
});

test('addShip() method of object returned by Gameboard()', () => {
    let gameboard = Gameboard();
    let ship = Ship(0, 0, 2);
    gameboard.addShip(ship);
    expect(gameboard.ships[0]).toEqual(ship);
});

test('receiveAttack() of Gameboard() making hit on ship', () => {
    // Initialize Gameboard object and add a Ship to it.
    let gameboard = Gameboard()
    gameboard.addShip(Ship(5, 5, 3, true));
    // Render attack that makes a hit.
    gameboard.receiveAttack(5, 7);
    // Expect attack to be rendered on targeted ship.
    expect(gameboard.ships[0].hits[2]).toEqual(true);
    // Expect misses property of gameboard to remain empty.
    expect(gameboard.misses).toEqual([]);
});

test('receiveAttack() of Gameboard() recording miss', () => {
    let gameboard = Gameboard()
    // Render attacks that miss.
    gameboard.receiveAttack(5, 6);
    // Expect misses array to have coordinates of miss.
    expect(gameboard.misses[0]).toEqual([5, 6]);
})

test('isAllShipsSunk() method of object returned by Gameboard()', () => {
    // Factory function returning a mock of a Ship object.
    const _getMockShip = () => { return { 'isSunk' : () => true } }
    // Initialize instance of Gameboard and add mock ships to it.
    let gameboard = Gameboard();
    gameboard.addShip(_getMockShip());
    gameboard.addShip(_getMockShip());
    // Test isAllShipsSunk() method of gameboard instance.
    expect(gameboard.isAllShipsSunk()).toEqual(true);
});