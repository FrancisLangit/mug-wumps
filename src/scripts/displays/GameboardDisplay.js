import { GameboardCellDisplay } from "./GameboardCellDisplay";


/**
 * Returns a `div` node that renders a `Gameboard` object.
 * 
 * @namespace
 * 
 * @param {Object} gameboard `Gameboard` object to render.
 * @param {Object} isComputer `true` if `Gameboard` object is computer's.
 * 
 * @returns {HTMLElement} `div` rendering a gameboard.
 */
const GameboardDisplay = (gameboard, isComputer) => {
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
     * Returns a styled interface representation of the gameboard grid.
     * 
     * @returns {HTMLElement}
     */
    const _getGrid = () => {
        let grid = document.createElement('div');
        grid.classList.add('gameboard');
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                grid.append(_getCell(x, y));
            }
        };
        return grid;
    }

    let gameboardDisplay = document.createElement('div');
    gameboardDisplay.appendChild(_getGrid());
    return gameboardDisplay;
}


export { GameboardDisplay }