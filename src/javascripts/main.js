import 'bootstrap';
import navbar from './components/navbar/navbar';
import clearMessages from './components/clearMessages/clearMessages';
import '../styles/main.scss';

const init = () => {
  navbar.createNavbar();
  clearMessages.clearMessages();
};

init();
