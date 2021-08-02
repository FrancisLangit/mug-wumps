import { Square } from "../Square/square";

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
const Ship = (x, y, length, isVertical) => {
    /**
     * Returns array holding `Square` objects making up body of ship.
     * 
     * @returns {Array} Holds Ship's `Square` objects.
     */
    const _getSquares = () => {
        let squares = [];
        for (let i = 0; i < length; i++) {
            squares.push(isVertical ? Square(x, y + i) : Square(x + i, y));
        }
        return squares;
    }

    /**
     * Sets `isHit` of target `Square` object in `squares` array to `true`.
     * 
     * @param {int} index Index of target `Square` object in `Ship.squares`.
     */
    const hit = (index) => {
        squares[index].isHit = true;
    }

    /**
     * Returns `true` if `isHit` of all `Square` objects in squares `true`.
     * 
     * @returns {boolean} `true` if all ships's square hit.
     */
    const isSunk = () => {
        return squares.every((square) => {
            return square.isHit === true;
        });
    }

    const squares = _getSquares();

    return { squares, hit, isSunk };
}


export { Ship }