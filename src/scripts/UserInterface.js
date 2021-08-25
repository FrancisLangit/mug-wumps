import { Game } from './objects/Game';
import { GameboardDisplay } from './displays/GameboardDisplay';


/**
 * Immediately invoked function expression (IIFE) module holding methods for
 * the updating of the user interface.
 * 
 * @module UserInterface
 */
const UserInterface = (() => {
    const root = document.getElementById('root');

    /**
     * Private function returning `div` holding display of both user and
     * computer gameboard.
     * 
     * @memberof module:UserInterface
     * 
     * @returns {HTMLElement} `div` holding game's gameboards.
     */
    const _getGameboards = () => {
        const gameboardsContainer = document.createElement('div');
        gameboardsContainer.append(
            GameboardDisplay(Game.playerGameboard),
            GameboardDisplay(Game.computerGameboard, true),
        );
        return gameboardsContainer;
    }

    /**
     * Fills up the "`root`" `div` of the user interface.
     * 
     * @memberof module:UserInterface
     * 
     * @returns {undefined}
     */
    const setUp = () => {
        root.appendChild(_getGameboards());
    }

    /**
     * Refreshes the user interface with new displays of game's objects.
     * 
     * @memberof module:UserInterface
     * 
     * @returns {undefined}
     */
    const update = () => {
        root.innerHTML = '';
        setUp();
    }

    return { setUp, update }
})();


export { UserInterface }