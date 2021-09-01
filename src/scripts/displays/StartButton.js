import { Button } from "./templates/Button";
import { GameState } from "../objects/GameState/GameState";
import { UserInterface } from "../UserInterface";


/**
 * Returns object representing a button that starts the game.
 * 
 * @namespace
 * 
 * @returns {Object}
 */
const StartButton = () => {
    /**
     * Hides Start and Randomize buttons and starts the game.
     */
    const _startGame = () => {
        GameState.start();
        startButton.hide();
        UserInterface.randomizeButton.hide();
        UserInterface.restartButton.show();
        UserInterface.update();
    }
    
    const startButton = Button('Start', ['start-button'], _startGame);
    return startButton;
}


export { StartButton }