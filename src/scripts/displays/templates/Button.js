import { DisplayElement } from "./DisplayElement";


/**
 * Returns an object representing a button.
 * 
 * @namespace
 * @param {string} text Text to be displayed in button.
 * @param {Array} classes CSS classes of the button.
 * @param {Function} callback Callback function called when button clicked.
 * @returns {Object}
 */
const Button = (text, classes, callback) => {
    const { get, hide, show } = DisplayElement();

    const button = get();
    button.textContent = text;
    button.classList.add(...classes);
    button.addEventListener('click', callback);

    return {
        get,
        hide,
        show,
    }
}


export { Button }