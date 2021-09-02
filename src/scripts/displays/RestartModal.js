import { Button } from "./templates/Button";
import { ShowHideElement } from "./templates/ShowHideElement";
import { Game } from "../Game";
import { UserInterface } from "../UserInterface";


/**
 * Returns `ShowHideElement` of a modal prompting user to restart game.
 * 
 * @returns {Object}
 */
const RestartModal = () => {
    // Create hidden ShowHideElement.
    const { get, hide, show } = ShowHideElement();
    hide();

    /**
     * Returns `div` holding text of modal.
     * 
     * @returns {HTMLElement}
     */
    const _getText = () => {
        const textContainer = document.createElement('div');
        textContainer.textContent = `Restart? You will lose this game.`;
        return textContainer;
    }

    /**
     * Returns "Yes" button that resets the game and user interface.
     * 
     * @returns {HTMLElement}
     */
    const _getYesButton = () => {
        const yesButton = Button('Yes', () => {
            Game.reset();
            UserInterface.restartButton.hide();
            UserInterface.winnerModal.hide();
            hide();
        });
        return yesButton.get();
    }

    /**
     * Returns "Cancel" button that closes the modal.
     * 
     * @returns {HTMLElement}
     */
    const _getCancelButton = () => Button('Cancel', hide).get();

    const modal = get();
    modal.append(_getText(), _getYesButton(), _getCancelButton());

    return {
        get,
        hide,
        show,
    }
}


export { RestartModal }