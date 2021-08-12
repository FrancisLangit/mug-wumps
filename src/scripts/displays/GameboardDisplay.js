import { GameboardCellDisplay } from "./GameboardCellDisplay";
import { UserInterface } from "../UserInterface";


/**
 * Returns a div node that renders a `Gameboard` object.
 * 
 * @param {Object} gameboard `Gameboard` object to render.
 * @param {Object} isComputer `true` if `Gameboard` object is computer's.
 * 
 * @returns {HTMLElement} `div` rendering a gameboard.
 */
const GameboardDisplay = (gameboard, isComputer) => {
    /**
     * Returns an `inline-grid` div representing grid of gameboard.
     * 
     * @returns {HTMLElement} Grid of gameboard.
     */
    const _getGrid = () => {
        let grid = document.createElement('div');
        grid.classList.add('gameboard');
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const cell = 
                    GameboardCellDisplay(x, y, gameboard, isComputer);
                grid.appendChild(cell);
            }
        };
        return grid;
    }

    let gridContainer = document.createElement('div');
    gridContainer.appendChild(_getGrid());

    return gridContainer;
}


export { GameboardDisplay }