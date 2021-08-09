import { Computer } from './scripts/Computer/Computer';
import { Gameboard } from './scripts/Gameboard/Gameboard';
import { Player } from './scripts/Player/Player';


const Game = (() => {
    let playerGameboard = Gameboard(true);
    let computerGameboard = Gameboard(true);

    let player = Player(computerGameboard);
    let computer = Computer(playerGameboard);

    return { 
        playerGameboard, 
        computerGameboard,
        player, 
        computer, 
    }
})();


export { Game }