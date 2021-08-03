const Gameboard = () => {
    let ships = [];
    let misses = [];
    
    const receiveAttack = (x, y) => {
    //     let count = 0;
    //     let isHit = false;
    //     while (count !== ships.length && !isHit) {
    //          if (true === true) {

    //          }
    //     }

        // count = 0
        // isHit = false
        // While (count != ships.length) and (isHit == false)
            // If [x, y] in ships[count]
                // hit ship
                // isHit = true
            // count++
        // if isHit == false
            // record miss
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