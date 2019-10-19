import 'bootstrap';
import navbar from './components/navbar/navbar';
import clearMessages from './components/clearMessages/clearMessages';
import '../styles/main.scss';
import placeholder from './components/placeholder/placeholder';

const init = () => {
  navbar.createNavbar();
  placeholder.makeText();
  placeholder.timeStamp();
  clearMessages.clearMessages();
};

init();
