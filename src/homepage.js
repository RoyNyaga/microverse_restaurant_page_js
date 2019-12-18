export const Home = (() => {

  const loadHomePage = (contentDiv, arg) => {
  	contentDiv.innerHTML = arg;
  };

  return { loadHomePage };
})();