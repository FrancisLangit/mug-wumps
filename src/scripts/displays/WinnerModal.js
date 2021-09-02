import { Button } from "./templates/Button";
import { ShowHideElement } from "./templates/ShowHideElement"; 


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
    const _getCloseButton = () => Button('[X]', hide).get();

    const update = (isComputerWon) => {
        computerWon = isComputerWon;
    }

    const modal = get();
    modal.append(_getWinnerText(), _getSubText(), _getCloseButton());

    return {
        get,
        hide,
        show,
        update,
    }
}


export { WinnerModal }