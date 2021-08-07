import { Computer } from './Computer';
import { Gameboard } from '../Gameboard/Gameboard';
import { Ship } from '../Ship/Ship';


test('Object returned from calling Computer(enemyGameboard)', () => {
    const computer = Computer('mockEnemyGameboard');
    expect(computer).toHaveProperty('makeRandomAttack');
});

test('makeRandomAttack() only attacks coordinates not already hit', () => {
    // Initialize Gameboard and Computer to test.
    const gameboard = Gameboard();
    const computer = Computer(gameboard);

    // Add a ship to the Gameboard object.
    gameboard.addShip(Ship(5, 5, 1));

    // Attack all coordinates on gameboard except [2, 3] and [5, 5].
    const twoThree = [2, 3].toString();
    const fiveFive = [5, 5].toString();
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {    
            const target = [x, y].toString();
            if (!(target === twoThree || target === fiveFive)) {
                gameboard.receiveAttack(x, y);
            }    
        }
    }

    // Make two consecutive random attacks.
    computer.makeRandomAttack();
    computer.makeRandomAttack();

    // Expect makeRandomAttack() to have targeted [2, 3] and [5, 5].
    expect(gameboard.misses.slice(-1)[0]).toEqual([2, 3]);
    expect(gameboard.ships[0].hits[0]).toEqual(true);
});