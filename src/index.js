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
function changeActiveTab(newActiveTabName){
    tabNameToElemMap[activeTab].classList.remove('active');
    activeTab = newActiveTabName;
    tabNameToElemMap[activeTab].classList.add('active');
}
function buildPageContent(pageBuilder){
    pageBuilder();
}
function clickNavHandler(e) {
    if (navButtonMap[e.target.id] && navButtonMap[e.target.id]['tab'] !== activeTab){
        clearContent();
        buildPageContent(navButtonMap[e.target.id]['buildFunction']);
        changeActiveTab(navButtonMap[e.target.id]['tab']);
    }
}
let nav = document.getElementsByTagName('nav')[0];
nav.addEventListener('click',clickNavHandler);