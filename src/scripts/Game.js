import { Computer } from './Computer/Computer';
import { Gameboard } from './Gameboard/Gameboard';
import { Player } from './Player/Player';
import { Ship } from './Ship/Ship';


const Game = (() => {
    let playerGameboard = Gameboard(true);
    let computerGameboard = Gameboard(true);

    let player = Player(computerGameboard);
    let computer = Computer(playerGameboard);

    return { playerGameboard, computerGameboard, player, computer }
})();


export { Game }