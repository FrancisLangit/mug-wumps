/**
 * Module containing and exporting `Player` factory function.
 * 
 * @module Player
 */

/**
 * Returns a `Player` object that can be controlled by the user.
 * 
 * @namespace
 * 
 * @param {Object} enemyGameboard `Gameboard` object of opponent. 
 * 
 * @returns {Object} Player object.
 */
const Player = (enemyGameboard) => {
    /**
     * Attacks the Player's enemy gameboard on specified coordinates.
     * 
     * @param {int} x X-coordinate of attack.
     * @param {int} y Y-coordinate of attack.
     */
    const makeAttack = (x, y) => {
        enemyGameboard.receiveAttack(x, y);
    }

    return { makeAttack };
}


export { Player }