/* eslint-disable no-mixed-spaces-and-tabs */
export const Menu = (() => {  
  const loadMenuPage = (contentDiv, arg) => {
  	contentDiv.innerHTML = arg;
  };
  return {loadMenuPage};
})();