/**
 * Factory function returning `Computer` object capable of random attacks.
 * 
 * @namespace
 * @param {Object} enemyGameboard `Gameboard` object of opponent.
 * @returns {Object}
 */
const Computer = (enemyGameboard) => {
    /**
     * Returns an array of positions that have yet to be hit.
     * 
     * @returns {Array}
     */
    const _getRandomAttackChoices = () => {
        let randomAttackChoices = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const isPosHit = enemyGameboard.isPositionShip(x, y, true);
                const isPosMiss = enemyGameboard.isPositionMiss(x, y);
                if (!isPosHit && !isPosMiss) {
                    randomAttackChoices.push([x, y]);
                }
            }
        }
        return randomAttackChoices;
    }
    
    /**
     * Makes a legal random attack on the enemy gameboard.
     */
    const makeRandomAttack = () => {
        const choices = _getRandomAttackChoices();
        const choiceIndex = Math.floor(Math.random() * choices.length);
        const choice = choices[choiceIndex];
        // enemyGameboard.receiveAttack(choice[0], choice[1]);
        enemyGameboard.receiveAttack(0, 0);
    }

    return { makeRandomAttack }
}


export { Computer }