/* eslint-disable no-mixed-spaces-and-tabs, no-param-reassign */

const Home = (() => {
  const homeContent = `<div class="container" id="home-section">
              <div class="card" id="home-main-div">
                  <img class="card-img-top" id="home-main-pic" src="../photos/homepage1.jpg" alt="Card image">
                  <div class="card-body">
                      <h4 class="card-title h2 about-card-h2 text-center">Welcome to China Chef Of Sorrento</h4>
                      <p class="card-text h4 text-center">Some quick example text to build on the card title and content. Some quick example text to build on the card title and content. Some quick example text to build on the card title and content. Some quick example text to build on the card title and content.</p>
                  </div>
              </div>
          </div> `;
  const loadHomePage = (contentDiv) => {
    contentDiv.innerHTML = homeContent;
  };
  return { loadHomePage };
})();
export default Home;
