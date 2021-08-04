import './styles/style.css';

import { Gameboard } from './scripts/Gameboard/Gameboard';
import { Ship } from './scripts/Ship/Ship';

let gameboard = Gameboard()
gameboard.ships.push(Ship(0, 0, 5, false));

gameboard.receiveAttack(0, 0);

console.log(gameboard.ships[0].hits[0]);