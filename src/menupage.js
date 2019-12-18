/* eslint-disable no-mixed-spaces-and-tabs,
import/prefer-default-export, no-param-reassign, no-tabs */
export const Menu = (() => {
  const loadMenuPage = (contentDiv, arg) => {
  	contentDiv.innerHTML = arg;
  };
  return { loadMenuPage };
})();
