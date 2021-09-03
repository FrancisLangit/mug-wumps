import { Game } from '../Game';
import { GameboardDisplay } from './gameboards/GameboardDisplay';
import { GameState } from '../objects/GameState/GameState';


/**
 * Returns a `div` containing both of the game's Gameboard interfaces.
 * 
 * @namespace
 * @param {boolean} isComputerTurn `true` if current turn is computer's.
 * @returns {HTMLElement}
 */
const PlayArea = (isComputerTurn) => {
    // Destructured Game object for shorter lines.
    let { playerGameboard, computerGameboard } = Game;

    /**
     * Returns `isInactive` argument to a `GameboardDisplay` call.
     * 
     * @param {*} isComputer `true` if state to be returned is computer's.
     * @returns {boolean}
     */
    const _getIsInactive = (isComputer) => {
        if (GameState.isRunning()) {
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
     * @returns {HTMLElement}
     */
    const _getGameboards = () => {
        const gameboards = document.createElement('div');
        gameboards.append(
            GameboardDisplay(playerGameboard, _getIsInactive(), false),
            GameboardDisplay(computerGameboard, _getIsInactive(true), true),
        );
        return gameboards;
    }

    return _getGameboards();
}


export { PlayArea }