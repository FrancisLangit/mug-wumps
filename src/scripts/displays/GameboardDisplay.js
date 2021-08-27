import { GameboardCellDisplay } from "./GameboardCellDisplay";


/**
 * Returns an object representing a rendered Gameboard.
 * 
 * @namespace
 * 
 * @param {Object} gameboard `Gameboard` object to render.
 * @param {Object} isInactive `true` if to be rendered as unclickable.
 * @param {Object} isComputer `true` if `Gameboard` object is computer's.
 * 
 * @returns {Object} Object representing a rendered gameboard.
 */
const GameboardDisplay = (gameboard, isInactive, isComputer) => {
    let element = document.createElement('div');

    /**
     * Returns a styled `div` representing a gameboard cell.
     * 
     * @param {int} x X-coordinate of the cell.
     * @param {int} y Y-coordinate of the cell.
     * 
     * @returns {HTMLElement}
     */
    const _getCell = (x, y) => {
        return GameboardCellDisplay(x, y, gameboard, isComputer);
    }

    /**
     * Fills up the gameboard's grid `div` with its cells.
     * 
     * @returns {undefined}
     */
    const _fill = () => {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                element.append(_getCell(x, y));
            }
        };
    }

    /**
     * Adds respective classes to the gameboard's display.
     * 
     * @returns {undefined}
     */
    const _style = () => {
        element.classList.add('gameboard');
        if (isInactive) {
            element.classList.add('gameboard-inactive');
        }
    }

    _fill();
    _style();

    return element;
}


export { GameboardDisplay }