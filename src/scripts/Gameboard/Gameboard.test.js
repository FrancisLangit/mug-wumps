import { Gameboard } from './Gameboard'; 


test('Properties of object returned by Gameboard()', () => {
    const gameboard = Gameboard();
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('misses', []);
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('isAllShipsSunk');
});

test('isAllShipsSunk() method of object returned by Gameboard()', () => {
    // Factory function returning a mock of a Ship object.
    const _getMockShip = () => { const isSunk = () => true }
    // Initialize instance of Gameboard and fill its ships array with mocks.
    let gameboard = Gameboard();
    gameboard.ships = Array(5).fill(_getMockShip());
    // Test isAllShipsSunk() method of gameboard instance.
    expect(gameboard.isAllShipsSunk()).toEqual(true);
});