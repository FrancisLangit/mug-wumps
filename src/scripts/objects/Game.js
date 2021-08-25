import { Computer } from './Computer/Computer';
import { Gameboard } from './Gameboard/Gameboard';
import { Player } from './Player/Player';


/**
 * Module holding the game logic of the program.
 * 
 * @module Game
 */
const Game = (() => {
    let playerGameboard = Gameboard(true);
    let computerGameboard = Gameboard(true);

    let player = Player(computerGameboard);
    let computer = Computer(playerGameboard);

    // Temporary attacks to aid in visualization.
    playerGameboard.receiveAttack(0, 0);
    playerGameboard.receiveAttack(7, 7);
    computerGameboard.receiveAttack(0, 0);
    computerGameboard.receiveAttack(7, 7);

    return { 
        playerGameboard, 
        computerGameboard,
        player, 
        computer, 
    }
})();


export { Game }