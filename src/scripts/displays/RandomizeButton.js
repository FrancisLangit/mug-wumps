const RandomizeButton = (gameboard) => {
    const randomizeButton = document.createElement('div');
    randomizeButton.textContent = 'Randomize';
    randomizeButton.addEventListener('click', () => {
        console.log(gameboard.misses)
    });
    return randomizeButton;
}


export { RandomizeButton }