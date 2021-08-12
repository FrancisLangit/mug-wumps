import { Game } from './objects/Game';
import { GameboardInterface } from './interfaces/GameboardInterface';


const UserInterface = (() => {
    const root = document.getElementById('root');

    const _getGameboards = () => {
        const gameboardsContainer = document.createElement('div');
        gameboardsContainer.append(
            GameboardInterface(Game.playerGameboard),
            GameboardInterface(Game.computerGameboard, true),
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