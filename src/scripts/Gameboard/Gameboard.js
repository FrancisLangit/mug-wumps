const Gameboard = () => {
    let ships = [];
    let misses = [];
    
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

    return { ships, misses, receiveAttack, isAllShipsSunk }
}


export { Gameboard }