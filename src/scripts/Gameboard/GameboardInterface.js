/**
 * Returns a div node that renders a `Gameboard` object.
 * 
 * @param {Object} gameboard `Gameboard` object to render. 
 * 
 * @returns {HTMLElement} `div` rendering a gameboard.
 */
const GameboardInterface = (gameboard) => {
    /**
     * Returns a grid item `div` representing gameboard cell.
     * 
     * @param {boolean} isShip `true` if cell displayed as a Ship's square. 
     * 
     * @returns {HTMLElement} Cell of gameboard grid.
     */
    const _getCell = (isShip=false) => {
        let cell = document.createElement("div");
        cell.classList.add('gameboard-cell');
        if (isShip) {
            cell.classList.add('ship');
        }
        return cell;
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
                if (gameboard.isPositionShip(x, y)) {
                    grid.appendChild(_getCell(true));
                } else {
                    grid.appendChild(_getCell());
                }
            }
        };
        return grid;
    }

    let gridContainer = document.createElement('div');
    gridContainer.appendChild(_getGrid());

    return gridContainer;
}


export { GameboardInterface }