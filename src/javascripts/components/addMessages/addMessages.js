import $ from 'jquery';
import 'bootstrap';
import moment from 'moment';
import data from '../../helpers/data/messages';
import printer from '../placeholder/placeholder';
import './addMessages.scss';

let counter = 6;

const addMessage = (e) => {
  const typedValue = e.target.value;
  // let newMessage = [];
  // newMessage += `
  //   <div class="newMessageContainer message">
  //     <span class="closebtn">×</span>
  //     <p>${typedValue}</p>
  //     <div class="timestamp">${moment().format('LLL')}</div>
  //   </div>`;
  // $('#chatBox').prepend(newMessage);
  const newMessage = {
    name: 'Me',
    text: `${typedValue}`,
    timestamp: `${moment().format('LLL')}`,
    id: `message${counter}`,
  };
  counter += 1;
  data.addToArray(newMessage);
  printer.makeText();
};

const findObjectFromEvent = (e) => {
  e.preventDefault();
  const selection = e.target.id;
  const messages = data.getMessages();
  const messageIndex = messages.findIndex((message) => message.id === selection);
  data.deleteFromArray(messageIndex);
  console.log(messageIndex);
  printer.makeText();
};

const deleteListener = () => {
  $('.closebtn').on('click', findObjectFromEvent);
};

const inputCreateMessage = () => {
  $('#myInput').on('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addMessage(e);
      $('#myInput').val('');
      deleteListener();
    }
  });
};

const messageLimit = () => {
  if ($('.message').length < 20) {
    inputCreateMessage();
  } else if ($('.message').length >= 20) {
    $('div:nth-child(26)').remove();
    inputCreateMessage();
  }
};

export default { messageLimit };
