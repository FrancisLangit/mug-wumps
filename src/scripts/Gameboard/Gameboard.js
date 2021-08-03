const Gameboard = () => {
    let ships = [];
    let misses = [];
    
    const receiveAttack = (x, y) => {
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