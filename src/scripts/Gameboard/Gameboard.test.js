import { Gameboard } from './Gameboard'; 
import { Ship } from '../Ship/Ship';


test('Properties of object returned by Gameboard()', () => {
    const gameboard = Gameboard();
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('misses', []);
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('isAllShipsSunk');
});

test('receiveAttack() of Gameboard() making hit on ships', () => {
    // Initialize Gameboard object and fill its ships array.
    let gameboard = Gameboard()
    gameboard.ships.push(Ship(0, 0, 5), Ship(5, 5, 3, true));
    // Render attacks that make hits.
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(5, 7);
    // Expect attack to be rendered on targeted ships.
    expect(gameboard.ships[0].hits[1]).toEqual(true);
    expect(gameboard.ships[1].hits[2]).toEqual(true);
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