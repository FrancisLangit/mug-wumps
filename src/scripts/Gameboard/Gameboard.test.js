import { Gameboard } from './Gameboard'; 


test('Properties of object returned by Gameboard()', () => {
    const gameboard = Gameboard();
    expect(gameboard).toHaveProperty('ships');
    expect(gameboard).toHaveProperty('misses', []);
    expect(gameboard).toHaveProperty('receiveAttack');
    expect(gameboard).toHaveProperty('isAllShipsSunk');
});

