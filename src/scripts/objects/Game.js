import { Computer } from './Computer/Computer';
import { Gameboard } from './Gameboard/Gameboard';
import { Player } from './Player/Player';


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
        computer.makeRandomAttack();
    }

    return { 
        playerGameboard, 
        computerGameboard,
        player, 
        computer,

        runTurn, 
    }
})();


export { Game }