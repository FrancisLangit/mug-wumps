import { Button } from "./templates/Button";
import { GameState } from "../objects/GameState/GameState";
import { UserInterface } from "../UserInterface";


/**
 * Returns `Button` object that starts the game.
 * 
 * @namespace
 * 
 * @returns {Object}
 */
const StartButton = () => {
    /**
     * Hides Start and Randomize buttons, shows restart button, starts the
     * game, and updates the user interface.
     */
    const _startGame = () => {
        startButton.hide();
        UserInterface.randomizeButton.hide();
        UserInterface.restartButton.show();
        GameState.start();
        UserInterface.update();
    }
    
    const startButton = Button('Start', _startGame);
    return startButton;
}


export { StartButton }