import { UserInterface } from "../UserInterface";


/**
 * Returns button that re-randomizes `Gameboard` object passed as argument.
 * 
 * @namespace
 * 
 * @param {Object} gameboard Gameboard that button will be randomizing.
 * 
 * @returns {HTMLElement} Button re-randomizing `Gameboard`.
 */
const RandomizeButton = (gameboard) => {
    const randomizeButton = document.createElement('div');
    
    randomizeButton.textContent = 'Randomize';
    randomizeButton.classList.add('randomize-button');
    
    randomizeButton.addEventListener('click', () => {
        gameboard.reset();
        UserInterface.update();
    });

    return randomizeButton;
}


export { RandomizeButton }