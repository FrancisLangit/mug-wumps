import { Game } from './Game';
import { GameboardDisplay } from './displays/GameboardDisplay';
import { RandomizeButton } from './displays/RandomizeButton';


/**
 * Module holding methods that update the user interface.
 * 
 * @module UserInterface
 */
const UserInterface = (() => {
    const root = document.getElementById('root');
    
    /**
     * Returns `isInactive` argument of a `GameboardDisplay` object.
     * 
     * @memberof module:UserInterface
     * 
     * @param {*} isComputerTurn `true` if turn of computer.
     * @param {*} isComputer `true` if state to be returned is computer's.
     * 
     * @returns {boolean} State of a `GameboardDisplay`.
     */
    const _getGameboardState = (isComputerTurn, isComputer) => {
        if (Game.isStart) {
            if (isComputer) {
                return isComputerTurn ? true : false;
            }
            return isComputerTurn ? false : true;
        }
        return true;
    }

    /**
     * Returns `div` holding display of both user and computer gameboard.
     * 
     * @memberof module:UserInterface
     * 
     * @param {boolean} isComputerTurn `true` if turn of computer.
     * 
     * @returns {HTMLElement} `div` holding game's gameboards.
     */
    const _getGameboards = (isComputerTurn) => {
        const gameboardsContainer = document.createElement('div');
        gameboardsContainer.append(
            GameboardDisplay(
                Game.playerGameboard, 
                _getGameboardState(isComputerTurn, false), 
                false,
            ),
            GameboardDisplay(
                Game.computerGameboard,
                _getGameboardState(isComputerTurn, true),
                true,
            ),
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
        root.appendChild(RandomizeButton(Game.playerGameboard));
    }

    /**
     * Displays on the user interface the respective winner of the game.
     * 
     * @param {boolean} isComputerWon `true` if to display that computer won.
     * 
     * @returns {undefined}
     */
    const displayWinner = (isComputerWon) => {
        isComputerWon ? alert('Computer wins.') : alert('You win!');
    }

    return { update, displayWinner }
})();


export { UserInterface }