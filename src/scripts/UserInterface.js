import { Game } from './objects/Game';
import { GameboardDisplay } from './displays/GameboardDisplay';


/**
 * Module holding methods that update the user interface.
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

    /**
     * Displays on the user interface the respective winner of the game.
     * 
     * @param {boolean} isComputerWon `true` if to display that computer won.
     * 
     * @returns {undefined}
     */
    const displayWinner = (isComputerWon) => {
        isComputerWon ? 'Computer wins.' : 'You win!';
    }

    return { update, displayWinner }
})();


export { UserInterface }