import Home from './homepage';
import Contact from './contactpage';
import Menu from './menupage';

const contentDiv = document.querySelector('#content');
const navLinks = document.querySelectorAll('.nav-link');

const Tools = (() => {
  const loadPage = () => {
    Home.loadHomePage(contentDiv);
  };

  const changeTab = () => {
    navLinks.forEach((element) => {
      element.addEventListener('click', (e) => {
        const clickedLink = e.target.innerHTML;
        if (clickedLink === 'Home') {
          Home.loadHomePage(contentDiv);
        } else if (clickedLink === 'Menu') {
          Menu.loadMenuPage(contentDiv);
        } else {
          Contact.loadContactPage(contentDiv);
        }
      });
    });
  };
  return { loadPage, changeTab };
})();

Tools.loadPage();
Tools.changeTab();
