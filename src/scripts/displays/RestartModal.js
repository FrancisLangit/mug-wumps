import { Button } from "./Button";


const RestartModal = () => {
    const modal = document.createElement('div');
    const text = `Restart? You will lose your data for this game.`
    modal.textContent = text;

    const yesButton = Button('Yes', [], () => console.log('Yes.'));
    const cancelButton = Button('Cancel', [], () => console.log('Cancel.'));

    const container = document.createElement('div');
    container.append(
        modal,
        yesButton.get(),
        cancelButton.get(),
    );
    container.style.border = '1px solid black';

    return container;
}


export { RestartModal }