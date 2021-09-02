import { Button } from "./templates/Button.js";
import { UserInterface } from "../UserInterface";


/**
 * Returns `Button` object that re-randomizes a `Gameboard` object.
 * 
 * @namespace
 * 
 * @param {Object} gameboard Gameboard that button will be randomizing.
 * @returns {Object}
 */
const RandomizeButton = (gameboard) => {
    return Button('Randomize', () => {
        gameboard.reset();
        UserInterface.update();
    });
}


export { RandomizeButton }