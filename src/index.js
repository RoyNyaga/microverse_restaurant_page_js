import { Home } from "homepage";
import { Contact } from "contactpage";
import { Menu } from "menupage";

const contentDiv = document.querySelector("#content");
const navLinks = document.querySelectorAll(".nav-link");
const homeContent = `<div class="container" id="home-section">
              <div class="card" id="home-main-div">
                  <img class="card-img-top" id="home-main-pic" src="homepage1.jpg" alt="Card image">
                  <div class="card-body">
                      <h4 class="card-title h2 about-card-h2 text-center">Welcome to China Chef Of Sorrento</h4>
                      <p class="card-text h4 text-center">Some quick example text to build on the card title and content. Some quick example text to build on the card title and content. Some quick example text to build on the card title and content. Some quick example text to build on the card title and content.</p>
                  </div>
              </div>
          </div> `;
const menuContent = `<div class="container mt-5" id="menu-section">
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="CHINESE%20SHISHKEBAB.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and content.</p>
                            <a class="btn btn-primary" href="#" role="button">Link button</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="CHINESE%20SHISHKEBAB.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and content.</p>
                            <a class="btn btn-primary" href="#" role="button">Link button</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="CHINESE%20SHISHKEBAB.jpg" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some quick example text to build on the card title and content.</p>
                            <a class="btn btn-primary" href="#" role="button">Link button</a>
                        </div>
                    </div>
                </div>              
            </div>
          </div>`;

const contactContent = `<div class="container mt-5" id="contact-section">
              <div class="row">
                  <div class="col-md-6 mx-auto">
                      <form id="contact-form">
                         <div class="form-group">
                             <label for="exampleFormControlInput1" class="text-white bolder">Name</label>
                             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">
                         </div>
                         <div class="form-group">
                             <label for="exampleInputEmail1" class="text-white">Email address</label>
                             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                         </div>
                         <div class="form-group">
                             <label for="exampleFormControlTextarea1" class="text-white">Message</label>
                             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                         </div>
                         <button type="submit" class="btn btn-primary">Submit</button>
                     </form>
      
                  </div>
              </div>
          </div>`;

const Tools = (() => {
  const loadPage = () => {
    loadHomePage(homeContent);
  }

  const changeTab = () => {
    navLinks.forEach((element) => {
      element.addEventListener("click", (e) => {
        let clickedLink = e.target.innerHTML;
        if (clickedLink === "Home"){
          Home.loadHomePage(homeContent);
        }else if( clickedLink === "Menu"){
          Menu.loadMenuPage(menuContent);
        }else{
          Contact.loadContactPage(contactContent);
        }
      });
    });
  }
  return { loadPage, changeTab };
})();

Tools.loadPage();
Tools.changeTab();
