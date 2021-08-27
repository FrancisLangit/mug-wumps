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
     * Returns `div` holding display of both user and computer gameboard.
     * 
     * @memberof module:UserInterface
     * 
     * @param {boolean} isComputerTurn `true` if turn of game computer's.
     * 
     * @returns {HTMLElement} `div` holding game's gameboards.
     */
    const _getGameboards = (isComputerTurn) => {
        const gameboardsContainer = document.createElement('div');
        gameboardsContainer.append(
            GameboardDisplay(
                Game.playerGameboard, isComputerTurn ? false : true, false),
            GameboardDisplay(
                Game.computerGameboard, isComputerTurn ? true : false, true),
        );
        return gameboardsContainer;
    }

    /**
     * Refreshes the user interface with new displays of game's objects.
     * 
     * @memberof module:UserInterface
     * 
     * @returns {undefined}
     */
    const update = (isComputerTurn) => {
        root.innerHTML = '';
        root.appendChild(_getGameboards(isComputerTurn));
    }

    return { update }
})();


export { UserInterface }