import { Game } from './Game';
import { PlayArea } from './displays/PlayArea';

import { RandomizeButton } from './displays/RandomizeButton';
import { StartButton } from './displays/StartButton';
import { RestartButton } from './displays/ResetButton';


/**
 * Module holding methods that update the user interface.
 * 
 * @module UserInterface
 */
const UserInterface = (() => {
    const root = document.getElementById('root');

    const startButton = StartButton();
    const randomizeButton = RandomizeButton(Game.playerGameboard);
    const restartButton = RestartButton(); 

    /**
     * Refreshes the user interface with new displays of game's objects.
     * 
     * @memberof module:UserInterface
     */
    const update = (isComputerTurn) => {
        root.innerHTML = '';
        root.append(
            startButton.get(),
            PlayArea(isComputerTurn),
            randomizeButton.get(),
            restartButton.get(),
        );
    }

    /**
     * Displays on the user interface the respective winner of the game.
     * 
     * @param {boolean} isComputerWon `true` if to display that computer won.
     */
    const displayWinner = (isComputerWon) => {
        isComputerWon ? alert('Computer wins.') : alert('You win!');
    }

    return { 
        startButton,
        randomizeButton, 
        restartButton,
    
        update, 
        displayWinner 
    }
})();


export { UserInterface }