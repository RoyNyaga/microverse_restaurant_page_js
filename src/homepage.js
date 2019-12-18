export const Home = (() => {

  const loadHomePage = (arg) => {
  	contentDiv.innerHTML = arg;
  };

  return { loadHomePage };
})();