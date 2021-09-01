import { Button } from "./templates/Button.js";
import { UserInterface } from "../UserInterface";


/**
 * Returns object representing button that re-randomizes a `Gameboard`.
 * 
 * @namespace
 * 
 * @param {Object} gameboard Gameboard that button will be randomizing.
 * @returns {Object}
 */
const RandomizeButton = (gameboard) => {
    /**
     * Re-randomizes ships on `Gameboard` object passed as argument.
     */
    const _randomizeGameboard = () => {
        gameboard.reset();
        UserInterface.update();
    }
    
    return Button('Randomize', ['randomize-button'], (_randomizeGameboard));
}


export { RandomizeButton }