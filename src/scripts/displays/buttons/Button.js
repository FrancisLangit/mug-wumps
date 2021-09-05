import { ShowHideElement } from "../ShowHideElement";


/**
 * Returns an object representing a button.
 * 
 * @namespace
 * @param {string} text Text to be displayed in button.
 * @param {Function} callback Callback function called when button clicked.
 * @param {boolean} isLink `true` if button to be styled as link.
 * @returns {Object}
 */
const Button = (text, callback) => {
    const { get, hide, show } = ShowHideElement();
    
    const button = get();
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', callback);

    return {
        get,
        hide,
        show,
    }
}


export { Button }