/* eslint-disable no-mixed-spaces-and-tabs, import/prefer-default-export, no-param-reassign */
export const Home = (() => {
  const loadHomePage = (contentDiv, arg) => {
    contentDiv.innerHTML = arg;
  };
  return { loadHomePage };
})();
