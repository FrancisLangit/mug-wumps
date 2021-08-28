import { Ship } from '../Ship/Ship';


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
            ships.push(Ship(5, 2, 4));
            ships.push(Ship(2, 4, 3, true));
            ships.push(Ship(5, 6, 3));
            ships.push(Ship(0, 8, 2, true));
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

    /**
     * Returns `true` if position on hit square of one of gameboard's ships.
     * 
     * @param {int} x X-coordinate of target position.
     * @param {int} y Y-coordinate of target position.
     * @param {boolean} getIsHit `true` if method to return if position is on
     *      a ship AND if it is hit.
     * 
     * @returns {boolean} `true` if `[x, y]` on hit square of `Ship`.
     */
    const isPositionShip = (x, y, getIsHit) => {
        for (const ship of ships) {
            for (const [i, pos] of ship.getPositions().entries()) {
                if (pos.toString() === [x, y].toString()) {
                    return getIsHit ? ship.hits[i] : true;
                }
            }
        }
        return false;
    }

    /**
     * Returns `true` if coordinates in `misses` array.
     * 
     * @param {int} x X-coordinate of target position.
     * @param {int} y Y-coordinate of target position.
     * 
     * @returns {boolean} `true` if `[x, y]` in `misses`.
     */
    const isPositionMiss = (x, y) => {
        const missesAsString = JSON.stringify(misses);
        const position = JSON.stringify([x, y]);
        return missesAsString.indexOf(position) !== -1;
    }

    /**
     * Resets all of the objects's ships and empties its `misses` array.
     * 
     * @returns {undefined}
     */
    const reset = () => {
        for (let i = 0; i < ships.length; i++) {
            ships[i].reset()
        }
        misses = [];
    }

    let ships = _getShips();
    let misses = [];

    return { 
        ships, 
        misses,

        addShip,
        receiveAttack,
        isAllShipsSunk,
        isPositionShip,
        isPositionMiss,
        reset,
    }
}


export { Gameboard }