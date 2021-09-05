import { Game } from './Game';

import { RandomizeButton } from './displays/buttons/RandomizeButton';
import { RestartButton } from './displays/buttons/RestartButton';
import { StartButton } from './displays/buttons/StartButton';

import { PlayArea } from './displays/gameboards/PlayArea';

import { RestartModal } from './displays/modals/RestartModal';
import { WinnerModal } from './displays/modals/WinnerModal';

import { Header } from './displays/Header';
import { Footer } from './displays/Footer';


/**
 * Module holding methods that update the user interface.
 * 
 * @module UserInterface
 */
const UserInterface = (() => {
    const root = document.getElementById('root');

    const startButton = StartButton();
    const randomizeButton = RandomizeButton(Game.playerGameboard);
    const restartButton = RestartButton();

    const restartModal = RestartModal();
    const winnerModal = WinnerModal();

    /**
     * Returns `div` with buttons that control the game.
     * 
     * @returns {HTMLElement}
     */
     const _getControls = () => {
        const controls = document.createElement('div');
        controls.classList.add('controls');
        controls.append(
            startButton.get(),
            randomizeButton.get(),
            restartButton.get(),
        );
        return controls;
    }

    /**
     * Returns `div` holding updated `PlayArea` object.
     * 
     * @returns {HTMLElement}
     */
    const _getPlayArea = (isComputerTurn) => {
        const playAreaContainer = document.createElement('div');
        playAreaContainer.classList.add('play-area');
        playAreaContainer.appendChild(PlayArea(isComputerTurn));
        return playAreaContainer;
    }

    /**
     * Refreshes the user interface with new displays of game's objects.
     * 
     * @memberof module:UserInterface
     */
    const update = (isComputerTurn) => {
        root.innerHTML = '';
        root.append(
            Header(),
            _getPlayArea(isComputerTurn),
            _getControls(), 
            restartModal.get(),
            winnerModal.get(),
            Footer(),
        );
    }

    /**
     * Displays winner of the game.
     * 
     * @param {boolean} isComputerWon `true` if to display that computer won.
     */
    const displayWinner = (isComputerWon) => {
        winnerModal.update(isComputerWon);
        winnerModal.show();
    }

    return { 
        startButton,
        randomizeButton,
        restartButton,
        restartModal,
        winnerModal,
    
        update, 
        displayWinner,
    }
})();


export { UserInterface }