import 'bootstrap';
import navbar from './components/navbar/navbar';
import clearMessages from './components/clearMessages/clearMessages';
import '../styles/main.scss';
import placeholder from './components/placeholder/placeholder';
import addMessages from './components/addMessages/addMessages';
import largeText from './components/largetext/largeText';
import customizer from './components/customizer/customizer';
import deleter from './components/deleteMessages/deleteMessages';

const init = () => {
  navbar.createNavbar();
  placeholder.messagePrinter();
  deleter.deleteListener();
  clearMessages.clearFunc();
  addMessages.inputCreateMessage();
  largeText.addLargeCheckListener();
  customizer.init();
};

init();
