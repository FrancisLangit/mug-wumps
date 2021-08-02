/**
 * Module holding and containing `Ship` factory function.
 * 
 * @module Ship
 */

/**
 * Factory function returning object representing a ship on the gameboard.
 * 
 * @namespace
 * 
 * @param {int} x X-coordinate of the top-left most square of the ship.
 * @param {int} y Y-coordinate of the top-left most square of the ship. 
 * @param {int} length  Number of squares occupied by the ship.
 * @param {boolean} isVertical `true` if ship vertical on the gameboard.
 * 
 * @returns {Object} Object representing a ship.
 */
const Ship = (x, y, length, isVertical=false) => {
    let hits = Array(length).fill(false);

    /**
     * Sets `isHit` of target `Square` object in `squares` array to `true`.
     * 
     * @param {int} index Index of target `Square` object in `Ship.squares`.
     */
    const hit = (index) => {
        hits[index] = true;
    }

    /**
     * Returns `true` if `isHit` of all `Square` objects in squares `true`.
     * 
     * @returns {boolean} `true` if all ships's square hit.
     */
    const isSunk = () => {
        return hits.every((hit) => {
            return hit === true;
        });
    }

    return { x, y, length, isVertical, hits, hit, isSunk };
}


export { Ship }