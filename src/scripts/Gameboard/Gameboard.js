import { Ship } from '../Ship/Ship';


/**
 * Module containing and exporting `Gameboard` factory function.
 * 
 * @module Gameboard
 */

/**
 * Factory function returning an object representing a gameboard.
 * 
 * @namespace
 * 
 * @param {boolean} isPrefilled `true` if `Gameboard.ships` to be prefilled 
 *      with `Ship` objects.
 * 
 * @returns {Object} Gameboard object.
 */
const Gameboard = (isPrefilled=false) => {
    /**
     * Returns an array to contain `Ship` objects of gameboard. Is prefilled
     * with `Ship` objects if `isPrefilled` argument is `true`.
     * 
     * @returns {Array} Array to contain `Ship` objects.
     */
    const _getShips = () => {
        let ships = [];
        if (isPrefilled) {
            ships.push(Ship(0, 0, 5));
            ships.push(Ship(0, 1, 4));
            ships.push(Ship(0, 2, 3));
            ships.push(Ship(0, 3, 3));
            ships.push(Ship(0, 4, 2));
        }
        return ships;
    }

    /**
     * Pushes a passed `Ship` object into `ships` array.
     * 
     * @param {Object} ship `Ship` object to be added to gameboard. 
     * 
     * @returns {undefined}
     */
    const addShip = (ship) => {
        ships.push(ship);
    }

    /**
     * Receives an attack and renders a hit on a ship or records a miss
     * dependents on coordinates passed.
     * 
     * @param {int} x X-coordinate of the attack.
     * @param {int} y Y-coordinate of the attack.
     * 
     * @returns {undefined}
     */
    const receiveAttack = (x, y) => {
        let isHit = false;
        ships.forEach((ship) => {
            ship.getPositions().forEach((position, index) => {   
                if (position.toString() === [x, y].toString()) {
                    ship.hit(index);
                    isHit = true;
                }
            });
        });
        !isHit && misses.push([x, y]);
    }

    /**
     * Returns `true` if `isSunk()` method of all `Ship` objects in `ships`
     * array return `true`.
     * 
     * @returns {boolean} Boolean dependent on status of ships.
     */
    const isAllShipsSunk = () => {
        return ships.every((ship) => {
            return ship.isSunk() === true;
        }); 
    }

    let ships = _getShips();
    let misses = [];

    return { ships, misses, addShip, receiveAttack, isAllShipsSunk }
}


export { Gameboard }