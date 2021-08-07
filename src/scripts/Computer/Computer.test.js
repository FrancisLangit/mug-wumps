import { Computer } from './Computer';
import { Gameboard } from '../Gameboard/Gameboard';
import { Ship } from '../Ship/Ship';


test('Object returned from calling Computer(enemyGameboard)', () => {
    const computer = Computer('mockEnemyGameboard');
    expect(computer).toHaveProperty('makeRandomAttack');
});

test('makeRandomAttack() only attacks coordinates not already hit', () => {
    // Initialize objects to test.
    const gameboard = Gameboard();
    gameboard.addShip(Ship(5, 5, 1));

    const computer = Computer(gameboard);

    // Attack all coordinates except for [5, 5] and [2, 3].
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {    
            let target = [x, y].toString()
            let isFiveFive = target === [5, 5].toString();
            let isTwoThree = target === [2, 3].toString();
            if (!(isFiveFive || isTwoThree)) {
                gameboard.receiveAttack(x, y);
            }    
        }
    }

    // Expect makeRandomAttack() to attack [5, 5] and [2, 3].
    computer.makeRandomAttack();
    computer.makeRandomAttack();
    expect(gameboard.ships[0].hits[0]).toEqual(true);
    expect(gameboard.misses.slice(-1)[0]).toEqual([2, 3]);
});