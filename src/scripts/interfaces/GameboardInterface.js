import { UserInterface } from "../UserInterface";


/**
 * Returns a div node that renders a `Gameboard` object.
 * 
 * @param {Object} gameboard `Gameboard` object to render.
 * @param {Object} isComputer `true` if `Gameboard` object is computer's.
 * 
 * @returns {HTMLElement} `div` rendering a gameboard.
 */
const GameboardInterface = (gameboard, isComputer) => {
    /**
     * Returns a grid item `div` representing gameboard cell.
     * 
     * @returns {HTMLElement} Cell of gameboard grid.
     */
    const _getCell = (x, y) => {
        let cell = document.createElement("div");

        if (isComputer) {
            cell.addEventListener('click', () => {
                gameboard.receiveAttack(x, y);
                UserInterface.update();
            });
        }

        cell.classList.add('cell');
        if (isComputer) {
            cell.classList.add('cell-computer');
        }

        return cell;
    }

    /**
     * Returns class of a specific cell on the gameboard.
     * 
     * @param {int} x X-coordinate of cell's position.
     * @param {int} y Y-coordinate of cell's position
     * 
     * @returns {string} Class of the cell of passed coordinates.
     */
    const _getCellClass = (x, y) => {
        if (gameboard.isPositionMiss(x, y)) {
            return 'cell-miss';
        } else if (gameboard.isPositionShip(x, y, true)) {
            return 'cell-hit';
        } else if (gameboard.isPositionShip(x, y)  && !isComputer) {
            return 'cell-ship';
        }
    } 

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
                let cell = _getCell(x, y);
                cell.classList.add(_getCellClass(x, y));
                grid.appendChild(cell);
            }
        };
        return grid;
    }

    let gridContainer = document.createElement('div');
    gridContainer.appendChild(_getGrid());

    return gridContainer;
}


export { GameboardInterface }