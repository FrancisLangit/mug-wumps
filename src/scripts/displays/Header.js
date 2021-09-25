/**
 * Returns `div` containing header section of interface.
 * 
 * @namespace
 * @returns {HTMLElement}
 */
const Header = () => {
    /**
     * Returns main text of the header.
     * 
     * @returns {HTMLElement}
     */
    const _getText = () => {
        const headerText = document.createElement('a');
        headerText.href = (
            'https://en.wikipedia.org/wiki/Mugwump_(video_game)');
        headerText.classList.add('header-text');
        headerText.textContent = 'mug.wumps';
        return headerText;
    }

    /**
     * Returns subtext section of the header.
     * 
     * @returns {HTMLElement}
     */
    const _getSubtext = () => {
        const headerSubtext = document.createElement('div');
        headerSubtext.classList.add('header-subtext');
        headerSubtext.textContent = 'Sighted wump, sank same.';
        return headerSubtext;
    }

    /**
     * 
     * Returns a link to be placed in the header.
     * 
     * @param {string} href URL of the link. 
     * @param {string} text Placeholder text the link.
     * @returns {HTMLElement}
     */
    const _getLink = (href, text) => {
        const link = document.createElement('a');
        link.href = href;
        link.textContent = text;
        link.classList.add('header-link');
        return link;
    }

    /**
     * Returns section holding links of the header.
     * 
     * @returns {HTMLElement}
     */
    const _getLinksSection = () => {
        const authorUrl = 'http://github.com/FrancisLangit';

        const aboutLink = _getLink(authorUrl + '/mug-wumps', 'About');
        const authorLink = _getLink(authorUrl, 'Author');
        const howtoLink = _getLink(
            authorUrl + '/mug-wumps#how-to-play', 'How To Play?');

        const headerLinks = document.createElement('div');
        headerLinks.classList.add('header-links');
        headerLinks.append(aboutLink, ' • ', authorLink, ' • ', howtoLink);

        return headerLinks;
    }

    const header = document.createElement('div');
    header.classList.add('header');
    header.append(_getText(), _getSubtext(), _getLinksSection());
    
    return header;
}


export { Header }