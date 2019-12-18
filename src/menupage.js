/* eslint-disable no-mixed-spaces-and-tabs, no-param-reassign, no-tabs */

const Menu = (() => {
  const menuContent = `<div class="container mt-5" id="menu-section">
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="../photos/CHINESE%20SHISHKEBAB.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and content.</p>
                            <a class="btn btn-primary" href="#" role="button">Link button</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="../photos/CHINESE%20SHISHKEBAB.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and content.</p>
                            <a class="btn btn-primary" href="#" role="button">Link button</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="../photos/CHINESE%20SHISHKEBAB.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and content.</p>
                            <a class="btn btn-primary" href="#" role="button">Link button</a>
                        </div>
                    </div>
                </div>              
            </div>
          </div>`;
  const loadMenuPage = (contentDiv) => {
  	contentDiv.innerHTML = menuContent;
  };
  return { loadMenuPage };
})();
export default Menu;
