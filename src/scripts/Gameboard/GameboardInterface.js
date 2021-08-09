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
     * @returns {HTMLElement} Cell of gameboard grid.
     */
    const _getCell = () => {
        let cell = document.createElement("div");
        cell.classList.add('gameboard-cell');
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
                grid.appendChild(_getCell());
            }
        };
        return grid;
    }

    let gridContainer = document.createElement('div');
    gridContainer.appendChild(_getGrid());

    return gridContainer;
}


export { GameboardInterface }