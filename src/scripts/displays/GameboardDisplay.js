import { GameboardCellDisplay } from "./GameboardCellDisplay";


/**
 * Returns a div node that renders a `Gameboard` object.
 * 
 * @param {Object} gameboard `Gameboard` object to render.
 * @param {Object} isComputer `true` if `Gameboard` object is computer's.
 * 
 * @returns {HTMLElement} `div` rendering a gameboard.
 */
const GameboardDisplay = (gameboard, isComputer) => {
    let grid = document.createElement('div');
    grid.classList.add('gameboard');
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            grid.append(GameboardCellDisplay(x, y, gameboard, isComputer));
        }
    };

    let container = document.createElement('div');
    container.appendChild(grid);

    return container;
}


export { GameboardDisplay }