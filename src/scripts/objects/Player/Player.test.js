import { Gameboard } from "../Gameboard/Gameboard";
import { Player } from "./Player";
import { Ship } from "../Ship/Ship";


test('Properties of object from Player(enemyGameboard)', () => {
    const player = Player('mockEnemyGameboard');
    expect(player).toHaveProperty('makeAttack');
});

test('makeAttack() method of object from Player(enemyGameboard)', () => {
    // Initialize Gameboard and Player to test.
    let enemyGameboard = Gameboard();
    let player = Player(enemyGameboard);

    // Add a ship to enemyGameboard.
    enemyGameboard.addShip(Ship(0, 1, 2));
    
    // Call player.makeAttack() for hit and for miss.
    player.makeAttack(1, 1);
    player.makeAttack(5, 5);
    
    // Assert that targeted ship hit and miss recorded.
    expect(enemyGameboard.ships[0].hits[1]).toEqual(true);
    expect(enemyGameboard.misses[0]).toEqual([5, 5]);
});