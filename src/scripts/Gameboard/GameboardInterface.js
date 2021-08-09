const GameboardInterface = (gameboard) => {
    const _getCell = () => {
        let cell = document.createElement("div");
        cell.classList.add('gameboard-cell');
        return cell;
    }

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