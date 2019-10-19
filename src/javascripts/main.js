import 'bootstrap';
import navbar from './components/navbar/navbar';
import '../styles/main.scss';
import placeholder from './components/placeholder';

const init = () => {
  placeholder.makeText();
  navbar.createNavbar();
};

init();
