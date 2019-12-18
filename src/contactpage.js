/* eslint-disable no-mixed-spaces-and-tabs, no-param-reassign, no-tabs */

const Contact = (() => {
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
  const loadContactPage = (contentDiv) => {
    contentDiv.innerHTML = contactContent;
  };
  return { loadContactPage };
})();
export default Contact;
