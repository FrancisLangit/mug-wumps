/**
 * Module holding and exporting `Square` factory function.
 * 
 * @module Square
 */

/**
 * @typedef {Object} Square
 * @property {Array} coordinates Array with x and y coordinates of square. 
 * @property {boolean} isOccupied `true` if square occupied by ship.
 * @property {boolean} isHit `true` if square has been hit by opponent.
 */

/**
 * Factory function returning object representing square on gameboard.
 * 
 * @param {int} x X-coordinate of square on gameboard. 
 * @param {int} y Y-coordinate of square on gameboard.
 * 
 * @returns {Square} `Square` object on gameboard. 
 */
const Square = (x, y) => {
    return {
        'coordinates': [x, y],
        'isOccupied': false,
        'isHit': false,
    }
}


export { Square }