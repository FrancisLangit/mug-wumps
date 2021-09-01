import { Button } from "./templates/Button";
import { DisplayElement } from "./templates/DisplayElement";
import { Game } from "../Game";
import { UserInterface } from "../UserInterface";


const RestartModal = () => {
    const { get, hide, show } = DisplayElement();
    hide(); // Modal initially hidden. 

    // Create container holding text of modal.
    const textContainer = document.createElement('div');
    textContainer.textContent = `Restart? You will lose this game.`;

    // Create modal's buttons.
    const yesButton = Button('Yes', [], () => {
        Game.reset();
        UserInterface.restartButton.hide();
        hide();
    });
    const cancelButton = Button('Cancel', [], hide);

    // Append HTMLElements to modal.
    const modal = get();
    modal.append(textContainer, yesButton.get(), cancelButton.get());

    return {
        get,
        hide,
        show,
    }
}


export { RestartModal }