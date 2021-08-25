import { UserInterface } from "../UserInterface";


/**
 * Returns a styled `div` representing a gameboard cell.
 * 
 * @namespace
 * 
 * @param {int} x Coordinate of cell on x-axis of gameboard.
 * @param {int} y Coordinate of cell on y-axis of gameboard.
 * @param {Object} gameboard Parent `Gameboard` object of cell to render.
 * @param {boolean} isComputer `true` if parent `Gameboard` is computer's.
 *  
 * @returns {HTMLElement} Styled `div` representing gameboard cell.
 */
const GameboardCellDisplay = (x, y, gameboard, isComputer) => {
    /**
     * Returns array of the cell's CSS classes in strings.
     * 
     * @returns {Array} Holds cell's CSS classes.
     */
    const _getClasses = () => {
        let classes = ['cell'];

        if (isComputer) {
            classes.push('cell-computer');
        }
        if (gameboard.isPositionMiss(x, y)) {
            classes.push('cell-miss');
        } else if (gameboard.isPositionShip(x, y, true)) {
            classes.push('cell-hit');
        } else if (gameboard.isPositionShip(x, y) && !isComputer) {
            classes.push('cell-ship');
        }

        return classes;
    }

    /**
     * Renders an attack onto the cell and updates its display.
     * 
     * @returns {undefined}
     */
    const _renderAttack = () => {
        gameboard.receiveAttack(x, y);
        UserInterface.update();
    }

    let cell = document.createElement('div');
    cell.classList.add(..._getClasses());
    cell.addEventListener('click', _renderAttack);

    return cell;
}


export { GameboardCellDisplay }