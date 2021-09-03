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

    /**
     * Returns `div` holding sub-text of modal.
     * 
     * @returns {HTMLElement}
     */
    const _getSubText = () => {
        const subText = document.createElement('div');
        if (computerWon) {
            subText.textContent = 'Try again next time.';
        } else {
            subText.text = 'Victory has been achieved!';
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
        const winner = computerWon ? 'Computer' : 'Player';
        winnerText.textContent = `${winner} has won.`;
        return winnerText;
    }

    /**
     * Returns button that closes the modal.
     * 
     * @returns {HTMLElement}
     */
    const _getCloseButton = () => {
        return Button('Close', hide).get();
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
            _getWinnerText(), 
            _getSubText(), 
            _getCloseButton()
        )
        return content;
    }

    /**
     * Updates the object's local `computerWon` boolean.
     * 
     * @param {boolean} isComputerWon `true` if computer won game.
     */
    const update = (isComputerWon) => {
        computerWon = isComputerWon;
    }

    const modal = get();
    modal.append(_getContent());
    modal.classList.add('modal');

    return {
        get,
        hide,
        show,
        update,
    }
}


export { WinnerModal }