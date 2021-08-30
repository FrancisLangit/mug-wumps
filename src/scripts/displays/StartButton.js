import { Game } from "../Game";
import { UserInterface } from "../UserInterface";


/**
 * Returns a button that starts the game.
 * 
 * @namespace
 * 
 * @returns {HTMLElement} Button that starts the game.
 */
const StartButton = () => {
    const startButton = document.createElement('div');
    
    startButton.textContent = 'Start';
    startButton.classList.add('start-button');
    
    startButton.addEventListener('click', () => {
        Game.isStart = true;
        UserInterface.update();
    });

    return startButton;
}


export { StartButton }