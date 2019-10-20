import 'bootstrap';
import navbar from './components/navbar/navbar';
import '../styles/main.scss';
import placeholder from './components/placeholder/placeholder';
import theme from './components/themeChanger/themeChange';

const init = () => {
  navbar.createNavbar();
  placeholder.makeText();
  // placeholder.timeStamp();
  theme.addCheckListener();
};

init();
