import { Game } from './Game';
import { PlayArea } from './displays/PlayArea';
import { RandomizeButton } from './displays/RandomizeButton';
import { StartButton } from './displays/StartButton';


/**
 * Module holding methods that update the user interface.
 * 
 * @module UserInterface
 */
const UserInterface = (() => {
    const root = document.getElementById('root');
    const startButton = StartButton();
    const randomizeButton = RandomizeButton(Game.playerGameboard);

    /**
     * Refreshes the user interface with new displays of game's objects.
     * 
     * @memberof module:UserInterface
     * 
     * @returns {undefined}
     */
    const update = (isComputerTurn) => {
        root.innerHTML = '';
        root.append(
            startButton.get(),
            PlayArea(isComputerTurn),
            randomizeButton.get(),
        );
    }

    /**
     * Displays on the user interface the respective winner of the game.
     * 
     * @param {boolean} isComputerWon `true` if to display that computer won.
     * 
     * @returns {undefined}
     */
    const displayWinner = (isComputerWon) => {
        isComputerWon ? alert('Computer wins.') : alert('You win!');
    }

    return { 
        startButton,
        randomizeButton, 
    
        update, 
        displayWinner 
    }
})();


export { UserInterface }