import { Computer } from './objects/Computer/Computer';
import { Gameboard } from './objects/Gameboard/Gameboard';
import { GameState } from './objects/GameState/GameState';
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

    /**
     * Stops the game.
     * 
     * @memberof module:Game
     */
     const _stop = () => {
        GameState.stop();
        UserInterface.update();
    }

    /**
     * Checks if someone won the game and renders such effect accordingly.
     * 
     * @memberof module:Game
     */
    const _checkWinner = () => {
        const isPlayerWon = computerGameboard.isShipsSunk();
        const isComputerWon = playerGameboard.isShipsSunk();
        if (isPlayerWon || isComputerWon) {
            UserInterface.displayWinner(isComputerWon);
            _stop();
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
        _checkWinner();
        if (GameState.isRunning()) {
            computer.makeRandomAttack();
            setTimeout(UserInterface.update, 500);
        }
    }

    /**
     * Stops the game and updates all objects to initial settings.
     * 
     * @memberof module:Game
     */
    const reset = () => {
        GameState.stop();
        playerGameboard.reset();
        computerGameboard.reset();
        UserInterface.startButton.show();
        UserInterface.randomizeButton.show();
        UserInterface.update();
    }

    return { 
        playerGameboard, 
        computerGameboard,
        player, 
        computer,

        runTurn,
        reset,
    }
})();


export { Game }