/**
 * Returns `div` containing header section of interface.
 * 
 * @namespace
 * @returns {HTMLElement}
 */
const Header = () => {
    const headerText = document.createElement('div');
    headerText.classList.add('header-text');
    headerText.textContent = 'mug.wumps';

    const headerSubtext = document.createElement('div');
    headerSubtext.classList.add('header-subtext');
    headerSubtext.textContent = 'Sighted wump, sank same.';

    const header = document.createElement('div');
    header.classList.add('header');
    header.append(headerText, headerSubtext);
    
    return header;
}


export { Header }