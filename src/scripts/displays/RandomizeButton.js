import { Button } from "./Button.js";
import { UserInterface } from "../UserInterface";


/**
 * Returns object representing button that re-randomizes a `Gameboard`.
 * 
 * @namespace
 * 
 * @param {Object} gameboard Gameboard that button will be randomizing.
 * 
 * @returns {Object} Button re-randomizing `Gameboard`.
 */
const RandomizeButton = (gameboard) => {

    const _randomizeGameboard = () => {
        gameboard.reset();
        UserInterface.update();
    }

    return Button(
        'Randomize', 
        ['randomize-button'], 
        _randomizeGameboard
    );
}


export { RandomizeButton }