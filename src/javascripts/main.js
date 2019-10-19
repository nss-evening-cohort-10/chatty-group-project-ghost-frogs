import 'bootstrap';
import navbar from './components/navbar/navbar';
import '../styles/main.scss';
import placeholder from './components/placeholder/placeholder';
import addMessages from './components/addMessages/addMessages';

const init = () => {
  navbar.createNavbar();
  placeholder.makeText();
  // placeholder.timeStamp();
  addMessages.inputCreateMessage();
};

init();
