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
    // Array as long as `length` argument with booleans set to false.
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

    /**
     * Returns array of coordinates where Ship's squares will be placed. 
     * 
     * @returns {Array} Contains arrays of coordinates.
     * 
     * @example
     * let ship = Ship(3, 3, 4);
     * console.log(ship.getPositions()); // [[3, 3], [4, 3], [5, 3], [6, 3]]
     */
    const getPositions = () => {
        let positions = [];
        for (let i = 0; i < length; i++) {
            positions.push(isVertical ? [x, y + i] : [x + i, y]);
        }
        return positions;
    }

    return { x, y, length, isVertical, hits, hit, isSunk, getPositions };
}


export { Ship }