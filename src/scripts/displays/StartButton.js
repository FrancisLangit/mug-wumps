import { Button } from "./Button";
import { GameState } from "../objects/GameState/GameState";
import { UserInterface } from "../UserInterface";


/**
 * Returns a button that starts the game.
 * 
 * @namespace
 * 
 * @returns {HTMLElement} Button that starts the game.
 */
const StartButton = () => {
    /**
     * Makes application start and game and hide itself.
     * 
     * @returns {undefined}
     */
    const _startGame = () => {
        startButton.hide();
        GameState.start();
        UserInterface.update();
    }
    
    const startButton = Button(
        'Start',
        ['start-button'],
        _startGame
    )

    return startButton;
}


export { StartButton }