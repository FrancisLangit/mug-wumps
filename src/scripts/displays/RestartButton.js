import { Button } from "./templates/Button.js";
import { UserInterface } from "../UserInterface.js";


/**
 * Returns button that resets the game to initial setings.
 * 
 * @namespace
 * @returns {HTMLElement} 
 */
const RestartButton = () => {
    /**
     * Resests the game and hides the Restart button.
     */
    const restartGame = () => {
        UserInterface.restartModal.show();
    }
    
    const restartButton = Button('Restart', restartGame);
    restartButton.hide(); // Restart button is hidden initially.

    return restartButton;
}


export { RestartButton }