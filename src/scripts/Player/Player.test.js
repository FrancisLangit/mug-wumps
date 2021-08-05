import { Gameboard } from "../Gameboard/Gameboard";
import { Player } from "./Player";
import { Ship } from "../Ship/Ship";


test('Properties of object from Player(enemyGameboard)', () => {
    const player = Player('mockEnemyGameboard');
    expect(player).toHaveProperty('makeAttack');
    expect(player).not.toHaveProperty('makeRandomAttack');
});

test('Properties of object from Player(enemyGameboard, true)', () => {
    const computer = Player('mockEnemyGameboard', true);
    expect(computer).toHaveProperty('makeRandomAttack');
    expect(computer).not.toHaveProperty('makeAttack');
});

test('makeAttack() method of object from Player(enemyGameboard)', () => {
    // Initialize enemyGameboard and Player objects to test.
    let enemyGameboard = Gameboard();
    enemyGameboard.addShip(Ship(0, 1, 3));

    let player = Player(enemyGameboard);
    
    // Call player.makeAttack() twice. One for hit, one for miss. 
    player.makeAttack(1, 1);
    player.makeAttack(5, 5);
    
    // Assert that targeted ship hit and miss recorded.
    expect(enemyGameboard.ships[0].hits[1]).toEqual(true);
    expect(enemyGameboard.misses[0]).toEqual([5, 5]);
});

test('makeRandomAttack() only attacks coordinates not already hit', () => {
    // Initialize Gameboard and Player object as computer to test.
    const gameboard = Gameboard();
    gameboard.addShip(Ship(5, 5, 1));

    const computer = Player(gameboard, true);

    // Attack all coordinates except for [5, 5].
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {        
            if ([x, y].toString() !== [5, 5].toString()) {
                gameboard.receiveAttack(x, y);
            }    
        }
    }

    // Expect makeRandomAttack() to attack [5, 5].
    computer.makeRandomAttack();
    expect(gameboard.ships[0].hits[0]).toEqual(true);
});