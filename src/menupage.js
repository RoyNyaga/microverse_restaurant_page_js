export const Menu = (() => {
  
  const loadMenuPage = (contentDiv, arg) => {
  	contentDiv.innerHTML = arg;
  }

  return { loadMenuPage };
})();