/**
 * Returns object representing `HTMLElement` that can be shown and hidden.
 * 
 * @namespace
 * @returns {Object}
 */
const ShowHideElement = () => {
    const showHideElement = document.createElement('div');

    /**
     * Returns object's `HTMLElement`.
     * 
     * @returns {HTMLElement}
     */
    const get = () => {
        return showHideElement;
    }

    /**
     * Hides the object.
     */
    const hide = () => {
        showHideElement.style.display = 'none';
    }

    /**
     * Shows the object if it was hidden.
     */
    const show = () => {
        showHideElement.style.display = 'inline-block';
    }
    
    return {
        get,
        hide,
        show,
    };
}


export { ShowHideElement }