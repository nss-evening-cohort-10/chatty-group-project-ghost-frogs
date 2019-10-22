import $ from 'jquery';
import data from '../../helpers/data/messages';
import printer from '../placeholder/placeholder';


const deleteObject = (e) => {
  e.preventDefault();
  const selection = e.target.id;
  const messages = data.getMessages();
  const messageIndex = messages.findIndex((message) => message.id === selection);
  data.deleteFromArray(messageIndex);
  printer.messagePrinter();
};

const deleteListener = () => {
  $('body').on('click', '.closebtn', deleteObject);
};

export default { deleteListener };
