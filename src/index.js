import './styles/style.css';

import { Computer } from './scripts/Computer/Computer';
import { Gameboard } from './scripts/Gameboard/Gameboard';
import { Player } from './scripts/Player/Player';


const Game = (() => {
    let playerGameboard = Gameboard(true);
    let computerGameboard = Gameboard(true);

    let player = Player(computerGameboard);
    let computer = Computer(playerGameboard);

    return { 
        playerGameboard, 
        computerGameboard,
        player, 
        computer, 
    }
})();

const UserInterface = (() => {
    const _renderGameboard = (gameboard) => {
        let container = document.createElement('div');
        container.classList.add('gameboard');
    
        for (let i = 0; i < 100; i++) {
            let cell = document.createElement("div");
            cell.textContent = i;
            cell.classList.add('gameboard-cell');
            container.appendChild(cell);
        };
        document.body.appendChild(container);
    }

    const _render = () => {
        _renderGameboard(Game.playerGameboard);
        _renderGameboard(Game.computerGameboard)
    }

    _render();
})();