import { Button } from "../buttons/Button";
import { Game } from "../../Game";
import { ShowHideElement } from "../ShowHideElement";
import { UserInterface } from "../../UserInterface";


/**
 * Returns `ShowHideElement` of a modal prompting user to restart game.
 * 
 * @namespace
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
        textContainer.textContent = `Restart? This game will be lost.`;
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

    /**
     * Returns `div` holding contents of modal.
     * 
     * @returns {HTMLElement}
     */
    const _getContent = () => {
        const content = document.createElement('div');
        content.classList.add('modal-content');
        content.append(
            _getText(),
            _getYesButton(),
            _getCancelButton(),
        )
        return content;
    }

    const modal = get();
    modal.append(_getContent());
    modal.classList.add('modal');

    return {
        get,
        hide,
        show,
    }
}


export { RestartModal }