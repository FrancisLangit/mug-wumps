import './styles/style.css';

import { Game } from './game';

import { GameboardInterface } from './scripts/Gameboard/GameboardInterface';


const UserInterface = (() => {
    document.body.appendChild(GameboardInterface(Game.playerGameboard));
    document.body.appendChild(GameboardInterface(Game.computerGameboard));
})();