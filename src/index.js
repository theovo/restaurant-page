import './reset.css';
import './style.css';
import loadTabHello from './tabHello';
import loadTabMenu from './tabMenu';
import loadTabAbout from './tabAbout';

loadTabHello();

const navigation = document.querySelector('nav');
navigation.addEventListener('click', callbackFn);

function callbackFn(e) {
    console.log(e.target);

    switch (e.target.textContent) {
        case 'Hello':
            loadTabHello();
            break;
        case 'Menu':
            loadTabMenu();
            break;
        case 'About':
            loadTabAbout();
            break;
        default:
            break;
    }
}