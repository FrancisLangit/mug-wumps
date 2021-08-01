import { Square } from "../Square/square";


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

    const squares = _getSquares();

    return { squares, hit };
}


export { Ship }