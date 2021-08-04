const Gameboard = () => {
    let ships = [];
    let misses = [];
    
    const receiveAttack = (x, y) => {
        let isHit = false;
        ships.forEach((ship) => {
            const positions = ship.getPositions();
            positions.forEach((position, index) => {   
                let positionJson = JSON.stringify(position);
                let targetPositionJson = JSON.stringify([x, y]);
                if (positionJson === targetPositionJson) {
                    ship.hit(index);
                    isHit = true;
                }
            });
        });
        if (!isHit) {
            misses.push([x, y])  
        };
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