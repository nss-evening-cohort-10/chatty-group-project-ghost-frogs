import $ from 'jquery';
import 'bootstrap';
import moment from 'moment';
import data from '../../helpers/data/messages';
import printer from '../placeholder/placeholder';
import './addMessages.scss';


let counter = 6;

const createNewMessage = (e) => {
  const typedValue = e.target.value;
  const newMessage = {
    name: 'Me',
    text: `${typedValue}`,
    timeStamp: `${moment().format('LLL')}`,
    id: `message${counter}`,
  };
  counter += 1;
  data.addToArray(newMessage);
};

const inputCreateMessage = () => {
  $('#myInput').on('keyup', (e) => {
    if (e.keyCode === 13) {
      $('.clearing').attr('disabled', false);
      e.preventDefault();
      createNewMessage(e);
      $('#myInput').val('');
      printer.messagePrinter();
    }
  });
};

// const messageLimit = () => {
//   if ($('.message').length < 20) {
//     inputCreateMessage();
//   } else if ($('.message').length >= 20) {
//     $('div:nth-child(26)').remove();
//     inputCreateMessage();
//   }
// };

export default { inputCreateMessage };
