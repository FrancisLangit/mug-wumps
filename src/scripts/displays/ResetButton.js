import { Button } from "./Button.js";
import { Game } from "../Game.js";


/**
 * Returns button that resets the game to initial setings.
 * 
 * @namespace
 * 
 * @returns {HTMLElement} 
 */
const RestartButton = () => {
    /**
     * Resests the game and hides the Restart button.
     */
    const restartGame = () => {
        Game.reset()
        restartButton.hide()
    }
    
    const restartButton = Button('Restart', ['restart-button'], restartGame);
    restartButton.hide(); // Restart button is hidden initially.

    return restartButton;
}


export { RestartButton }