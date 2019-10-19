import 'bootstrap';
import navbar from './components/navbar/navbar';
import '../styles/main.scss';
import placeholder from './components/placeholder/placeholder';

const init = () => {
  navbar.createNavbar();
  placeholder.makeText();
  placeholder.timeStamp();
};

init();
