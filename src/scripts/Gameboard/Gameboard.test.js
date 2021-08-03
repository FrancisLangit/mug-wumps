import { Gameboard } from './Gameboard'; 
import { Ship } from '../Ship/Ship';


test('Properties of object returned by Gameboard()', () => {
    const gameboard = Gameboard();
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('misses', []);
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('isAllShipsSunk');
});

test('receiveAttack() of Gameboard() making hit', () => {
    // Initialize Gameboard object with mock ships array.
    let gameboard = Gameboard()
    gameboard.ships = [Ship(0, 0, 5, false)];
    // Render attack that makes a hit.
    gameboard.receiveAttack(1, 0);
    // Expect attack to be rendered on target ship.
    expect(gameboard.ships[1].hits[0]).toEqual(true);
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
    const _getMockShip = () => { const isSunk = () => true }
    // Initialize instance of Gameboard and fill its ships array with mocks.
    let gameboard = Gameboard();
    gameboard.ships = Array(5).fill(_getMockShip());
    // Test isAllShipsSunk() method of gameboard instance.
    expect(gameboard.isAllShipsSunk()).toEqual(true);
});