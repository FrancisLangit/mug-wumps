import './styles/style.css';

import { Game } from './game';
import { GameboardInterface } from './scripts/Gameboard/GameboardInterface';


const UserInterface = (() => {
    let { playerGameboard, computerGameboard, player, Computer } = Game;

    playerGameboard.receiveAttack(0, 0);
    playerGameboard.receiveAttack(7, 7);

    computerGameboard.receiveAttack(0, 0);
    computerGameboard.receiveAttack(7, 7);

    document.body.appendChild(GameboardInterface(playerGameboard));
    document.body.appendChild(GameboardInterface(computerGameboard, true));
})();