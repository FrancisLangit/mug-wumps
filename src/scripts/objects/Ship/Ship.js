/**
 * Returns an object representing a ship on the gameboard.
 * 
 * @namespace
 * @param {int} x X-coordinate of the top-left most square of the ship.
 * @param {int} y Y-coordinate of the top-left most square of the ship. 
 * @param {int} length  Number of squares occupied by the ship.
 * @param {boolean} isVertical `true` if ship vertical on the gameboard.
 * @returns {Object}
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
     * @returns {boolean}
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

    /**
     * Sets all booleans in object's `hits` array back to `false`.
     */
    const reset = () => {
        for (let i = 0; i < hits.length; i++) {
            hits[i] = false;
        }
    }

    return { 
        x,
        y,
        length,
        isVertical,
        hits,
        
        hit,
        isSunk,
        getPositions,
        reset,
    };
}


/**
 * Returns a `Ship` object with randomly generated position and alignment. 
 * 
 * @namespace
 * @param {int} length Length of the Ship.
 * @returns {Object}
 */
const RandomShip = (length) => {
    let isVertical = Math.random() < 0.5;

    /**
     * Returns a randomly generated coordinate for the Ship. 
     * 
     * @param {boolean} isY `true` if y-coordinate to be generated. 
     * @returns {int}
     */
    const _getCoordinate = (isY) => {
        let limit = 10;
        if (isVertical && isY || !isVertical && !isY) {
            limit -= length;
        }
        return Math.floor(Math.random() * limit);
    }

    return Ship(
        _getCoordinate(),
        _getCoordinate(true), 
        length, 
        isVertical,
    );
}


export { Ship, RandomShip }