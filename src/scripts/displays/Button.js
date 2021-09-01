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
    const button = document.createElement('div');
    button.textContent = text;
    button.classList.add(...classes);
    button.addEventListener('click', callback);

    /**
     * Returns the display interface of the button.
     * 
     * @returns {HTMLElement}
     */
    const get = () => {
        return button;
    }

    /**
     * Hides the button from the user interface.
     */
    const hide = () => {
        button.style.display = 'none';
    }

    /**
     * Shows the button, if hidden.
     */
    const show = () => {
        button.style.display = 'initial';
    }
    
    return {
        get,
        hide,
        show,
    };
}


export { Button }