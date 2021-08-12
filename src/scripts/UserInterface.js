import { Game } from './objects/Game';
import { GameboardDisplay } from './displays/GameboardDisplay';


const UserInterface = (() => {
    const root = document.getElementById('root');

    const _getGameboards = () => {
        const gameboardsContainer = document.createElement('div');
        gameboardsContainer.append(
            GameboardDisplay(Game.playerGameboard),
            GameboardDisplay(Game.computerGameboard, true),
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