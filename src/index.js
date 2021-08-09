import './styles/style.css';

import { Game } from './game';


const UserInterface = (() => {
    const _getGameboardInterface = (gameboard) => {
        const _getCell = () => {
            let cell = document.createElement("div");
            cell.classList.add('gameboard-cell');
            return cell;
        }
    
        const _getGrid = () => {
            let grid = document.createElement('div');
            grid.classList.add('gameboard');
            for (let i = 0; i < 100; i++) {
                grid.appendChild(_getCell());
            };
            return grid;
        }

        let gridContainer = document.createElement('div');
        gridContainer.appendChild(_getGrid());

        return gridContainer;
    }

    document.body.appendChild(_getGameboardInterface(Game.playerGameboard));
    document.body.appendChild(_getGameboardInterface(Game.computerGameboard));
})();