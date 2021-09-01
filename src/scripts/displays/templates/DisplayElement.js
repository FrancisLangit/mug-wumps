/**
 * Returns object representing `HTMLElement` that can be shown and hidden.
 * 
 * @namespace
 * @returns {Object}
 */
const DisplayElement = () => {
    const displayElement = document.createElement('div');

    /**
     * Returns object's `HTMLElement`.
     * 
     * @returns {HTMLElement}
     */
    const get = () => {
        return displayElement;
    }

    /**
     * Hides the object.
     */
    const hide = () => {
        displayElement.style.display = 'none';
    }

    /**
     * Shows the object if it was hidden.
     */
    const show = () => {
        displayElement.style.display = 'initial';
    }
    
    return {
        get,
        hide,
        show,
    };
}


export { DisplayElement }