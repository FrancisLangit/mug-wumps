import { Computer } from './scripts/Computer/Computer';
import { Gameboard } from './scripts/Gameboard/Gameboard';
import { Player } from './scripts/Player/Player';


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