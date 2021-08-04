import { Player } from "./Player";


test('Properties of object from Player(enemyGameboard)', () => {
    const player = Player('mockEnemyGameboard');
    expect(player).toHaveProperty('makeAttack');
});

test('Properties of object from Player(enemyGameboard, true)', () => {
    const computer = Player('mockEnemyGameboard', true);
    expect(computer).toHaveProperty('makeRandomAttack');
});