import { UserInterface } from "../UserInterface";


const RandomizeButton = (gameboard) => {
    const randomizeButton = document.createElement('div');
    randomizeButton.textContent = 'Randomize';
    randomizeButton.addEventListener('click', () => {
        gameboard.reset();
        UserInterface.update();
    });
    return randomizeButton;
}


export { RandomizeButton }