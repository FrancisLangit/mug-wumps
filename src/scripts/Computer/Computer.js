/**
 * Module contaning and exporting `Computer` factory function.
 * 
 * @module Computer
 */

/**
 * Factory function returning `Computer` object capable of random attacks.
 * 
 * @namespace
 * 
 * @param {Object} enemyGameboard `Gameboard` object of opponent.
 * 
 * @returns {Object} `Computer` object.
 */
const Computer = (enemyGameboard) => {
    /**
     * Returns an array of positions that have yet to be hit.
     * 
     * @returns {Array} Array of `[x ,y]` positions.
     */
    const _getRandomAttackChoices = () => {
        let randomAttackChoices = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const isPosHit = enemyGameboard.isPositionHit(x, y);
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
     * 
     * @returns {undefined}
     */
    const makeRandomAttack = () => {
        const choices = _getRandomAttackChoices();
        const choiceIndex = Math.floor(Math.random() * choices.length);
        const choice = choices[choiceIndex];
        enemyGameboard.receiveAttack(choice[0], choice[1]);
    }

    return { makeRandomAttack }
}


export { Computer }