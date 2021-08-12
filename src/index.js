import './styles/style.css';

import { Game } from './game';
import { GameboardInterface } from './scripts/Gameboard/GameboardInterface';


const UserInterface = (() => {
    const root = document.getElementById('root');

    const _getGameboards = () => {
        const gameboardsContainer = document.createElement('div');
        gameboardsContainer.append(
            GameboardInterface(Game.playerGameboard, update),
            GameboardInterface(Game.computerGameboard, update, true),
        );
        return gameboardsContainer;
    }

    const _setUp = () => {
        root.appendChild(_getGameboards());
    }

    const update = () => {
        root.innerHTML = '';
        _setUp();
    }

    _setUp()

    return { update }
})();


export { UserInterface }