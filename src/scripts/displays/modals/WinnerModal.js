import { Button } from "../buttons/Button";
import { ShowHideElement } from "../ShowHideElement"; 

/**
 * Returns `ShowHideElement` of a modal showing winner of the game.
 * 
 * @namespace
 * @returns {Object}
 */
const WinnerModal = () => {
    let computerWon;

    // Create hidden ShowHideElement.
    const { get, hide, show } = ShowHideElement();
    hide();

    // Style modal.
    get().classList.add('modal');

    /**
     * Returns `div` holding sub-text of modal.
     * 
     * @returns {HTMLElement}
     */
    const _getSubText = () => {
        const subText = document.createElement('div');
        subText.classList.add('modal-subtext');
        if (computerWon) {
            subText.textContent = 'Try again next time.';
        } else {
            subText.textContent = 'Mission accomplished.';
        }
        return subText;
    }

    /**
     * Returns `div` holding text of modal displaying winner.
     * 
     * @returns {HTMLElement}
     */
    const _getWinnerText = () => {
        const winnerText = document.createElement('div');
        if (computerWon) {
            winnerText.textContent = 'You lost.';
        } else {
            winnerText.textContent = 'You win!';
        }
        return winnerText;
    }

    /**
     * Returns `div` containing text of the modal.
     */
    const _getText = () => {
        const modalText = document.createElement('div');
        modalText.classList.add('modal-text');
        modalText.append(_getWinnerText(), _getSubText());
        return modalText;
    }

    /**
     * Returns button that closes the modal.
     * 
     * @returns {HTMLElement}
     */
    const _getCloseButton = () => {
        return Button('Close', hide, true).get();
    }

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
            _getCloseButton(),
        )
        return content;
    }

    /**
     * Updates the object's local `computerWon` boolean and display.
     * 
     * @param {boolean} isComputerWon `true` if computer won game.
     */
    const update = (isComputerWon) => {
        computerWon = isComputerWon;

        const modal = get();
        modal.innerHTML = '';
        modal.appendChild(_getContent());
    }

    return {
        get,
        hide,
        show,

        update,
    }
}


export { WinnerModal }