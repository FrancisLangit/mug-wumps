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
     * Returns `true` if coordinates on hit square of `Ship`.
     * 
     * @param {int} x X-coordinate of target position.
     * @param {int} y Y-coordinate of target position.
     * 
     * @returns {boolean} `true` if `[x, y]` on hit square of `Ship`.
     */
    const _isPositionHit = (x, y) => {
        for (const ship of enemyGameboard.ships) {
            for (const [i, pos] of ship.getPositions().entries()) {
                if (pos.toString() === [x, y].toString()) {
                    return ship.hits[i];
                }
            }
        }
    }

    /**
     * Returns `true` if coordinates in `enemyGameboard.misses`.
     * 
     * @param {int} x X-coordinate of target position.
     * @param {int} y Y-coordinate of target position.
     * 
     * @returns {boolean} `true` if `[x, y]` in `enemyGameboard.misses`.
     */
    const _isPositionMiss = (x, y) => {
        const misses = JSON.stringify(enemyGameboard.misses);
        const position = JSON.stringify([x, y]);
        return misses.indexOf(position) !== -1;
    }

    /**
     * Returns an array of positions that have yet to be hit.
     * 
     * @returns {Array} Array of `[x ,y]` positions.
     */
    const _getRandomAttackChoices = () => {
        let randomAttackChoices = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {      
                if (!_isPositionHit(x, y) && !_isPositionMiss(x, y)) {
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