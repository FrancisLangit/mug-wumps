/**
 * Returns `div` containing footer section of user interface.
 * 
 * @returns {HTMLElement}
 */
const Footer = () => {
    const footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    footerText.textContent = 'MIT License';

    const footerSubtext = document.createElement('a');
    footerSubtext.classList.add('footer-subtext');
    footerSubtext.href = 'http://github.com/FrancisLangit';
    footerSubtext.textContent = 'Copyright © 2021 Francis Langit';

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.append(footerText, footerSubtext);

    return footer;
}


export { Footer }