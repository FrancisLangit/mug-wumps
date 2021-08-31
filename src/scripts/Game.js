import { Computer } from './objects/Computer/Computer';
import { Gameboard } from './objects/Gameboard/Gameboard';
import { Player } from './objects/Player/Player';
import { UserInterface } from './UserInterface';


/**
 * Module holding the objects of the application.
 * 
 * @module Game
 */
const Game = (() => {
    let playerGameboard = Gameboard(true);
    let computerGameboard = Gameboard(true);

    let player = Player(computerGameboard);
    let computer = Computer(playerGameboard);

    let isStart = false;

    /**
     * Resets the game.
     * 
     * @memberof module:Game
     * 
     * @returns {undefined} 
     */
    const _reset = () => {
        playerGameboard.reset();
        computerGameboard.reset();
        Game.isStart = false;
    }

    /**
     * Checks if someone won the game and renders such effect accordingly.
     * 
     * @memberof module:Game
     * 
     * @returns {undefined}
     */
    const _checkWinner = () => {
        const isPlayerWon = computerGameboard.isShipsSunk();
        const isComputerWon = playerGameboard.isShipsSunk();
        if (isPlayerWon || isComputerWon) {
            UserInterface.displayWinner(isComputerWon);
            _reset();
        }
    }

    /**
     * Runs a turn of the game, whereby the Player and Computer make moves to
     * attack each other.
     * 
     * @memberof module:Game
     * 
     * @param {int} playerAttackX X-coordinate of Player's attack.
     * @param {int} playerAttackY Y-coordinate of Player's attack.
     */
    const runTurn = (playerAttackX, playerAttackY) => {
        computerGameboard.receiveAttack(playerAttackX, playerAttackY);
        UserInterface.update(true);
        computer.makeRandomAttack();
        setTimeout(UserInterface.update, 500);
        _checkWinner();
    }

    return { 
        playerGameboard, 
        computerGameboard,
        player, 
        computer,
        isStart,

        runTurn,
    }
})();


export { Game }