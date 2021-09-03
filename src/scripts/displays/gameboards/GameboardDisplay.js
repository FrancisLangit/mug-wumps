import { GameboardCellDisplay } from "./GameboardCellDisplay";


/**
 * Returns an object representing a rendered Gameboard.
 * 
 * @namespace
 * @param {Object} gameboard `Gameboard` object to render.
 * @param {boolean} isInactive `true` if to be rendered as unclickable.
 * @param {boolean} isComputer `true` if `Gameboard` object is computer's.
 * @returns {Object}
 */
const GameboardDisplay = (gameboard, isInactive, isComputer) => {
    let element = document.createElement('div');

    /**
     * Returns a styled `div` representing a gameboard cell.
     * 
     * @param {int} x X-coordinate of the cell.
     * @param {int} y Y-coordinate of the cell.
     * @returns {HTMLElement}
     */
    const _getCell = (x, y) => {
        return GameboardCellDisplay(x, y, gameboard, isComputer);
    }

    /**
     * Fills up the gameboard's grid `div` with its cells.
     */
    const _fill = () => {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                element.append(_getCell(x, y));
            }
        };
    }

    /**
     * Adds respective classes to the gameboard's display.
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