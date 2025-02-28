import "./styles.css";
import { buildHome } from "./home.js";
import { buildMenu } from "./menu.js";
import { buildContact } from "./contact.js";
buildHome();
// buildMenu();
// buildContact();
let activeTab = 'home';
const homeNavButtonId = 'home-tab-btn'
const menuNavButtonId = 'menu-tab-btn'
const contactNavButtonId = 'contact-tab-btn'
const navButtonMap = {
    [homeNavButtonId]: {
        tab: 'home',
        buildFunction: buildHome,
    },
    [menuNavButtonId] : {
        tab: 'menu',
        buildFunction: buildMenu,
    },
    [contactNavButtonId] : {
        tab: 'contact',
        buildFunction: buildContact,
    },
}
const tabNameToElemMap = {
    'home': document.getElementById(homeNavButtonId),
    'menu': document.getElementById(menuNavButtonId),
    'contact': document.getElementById(contactNavButtonId),
}
function clearContent(){
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
}
function clickNavHandler(e) {
    if (navButtonMap[e.target.id] && navButtonMap[e.target.id]['tab'] !== activeTab){
        clearContent();
        navButtonMap[e.target.id]['buildFunction']();
        tabNameToElemMap[activeTab].classList.remove('active');
        activeTab = navButtonMap[e.target.id]['tab'];
        tabNameToElemMap[activeTab].classList.add('active');
    }
}
let nav = document.getElementsByTagName('nav')[0];
nav.addEventListener('click',clickNavHandler);