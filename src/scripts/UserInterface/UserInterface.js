import { Game } from '../Game/Game';
import { GameboardInterface } from '../Gameboard/GameboardInterface';


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

    const setUp = () => {
        root.appendChild(_getGameboards());
    }

    const update = () => {
        root.innerHTML = '';
        setUp();
    }

    return { setUp, update }
})();


export { UserInterface }