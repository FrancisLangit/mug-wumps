import { UserInterface } from "../UserInterface";


const GameboardCellDisplay = (x, y, gameboard, isComputer) => {
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