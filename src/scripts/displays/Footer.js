/**
 * Returns `div` containing footer section of user interface.
 * 
 * @namespace
 * @returns {HTMLElement}
 */
const Footer = () => {
    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'MIT License';

    const footerSubtext = document.createElement('div');
    footerSubtext.classList.add('footer-subtext');
    footerSubtext.textContent = 'Copyright © 2021 • Francis Langit';

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.append(footerText, footerSubtext);

    return footer;
}


export { Footer }