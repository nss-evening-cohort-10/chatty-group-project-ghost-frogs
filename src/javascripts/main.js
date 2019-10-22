import 'bootstrap';
import navbar from './components/navbar/navbar';
import clearMessages from './components/clearMessages/clearMessages';
import '../styles/main.scss';
import placeholder from './components/placeholder/placeholder';
import theme from './components/themeChanger/themeChange';
import addMessages from './components/addMessages/addMessages';
import largeText from './components/largetext/largeText';
import customizer from './components/customizer/customizer';

const init = () => {
  navbar.createNavbar();
  placeholder.makeText();
  clearMessages.clearFunc();
  // placeholder.timeStamp();
  theme.addCheckListener();
  addMessages.deleteMessage();
  addMessages.messageLimit();
  largeText.addLargeCheckListener();
  customizer.init();
};

init();
