import utilities from '../../helpers/utilities';

import './navbar.scss';

const createNavbar = () => {
  let navbar = '';
  navbar = `
  <nav class="navbar navbar-expand-lg fixed-top">
    <a class="navbar-brand" href="#">
      <img alt="Brand" src="src/Images/chatty2e10.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="input-group input-group-lg">
      <div class="input-group-prepend"></div>
      <input id="myInput" class="form-control mr-sm-2" type="search" placeholder="Write Message..." aria-label="text input">
        <button class="btn my-2 my-sm-0 clearing" type="submit">Clear</button>
    </div>
  </nav>
  `;
  utilities.printToDom('navbar', navbar);
};

export default { createNavbar };
