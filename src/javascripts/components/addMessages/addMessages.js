import $ from 'jquery';
import 'bootstrap';
import moment from 'moment';
import './addMessages.scss';

const addMessage = (e) => {
  const typedValue = e.target.value;
  let newMessage = [];
  newMessage += `
    <div class="newMessageContainer message">
      <span class="closebtn">×</span>
      <p>${typedValue}</p>
      <div class="timestamp">${moment().format('LLL')}</div>
    </div>`;
  $('#chatBox').prepend(newMessage);
};

const deleteMessage = () => {
  $('.closebtn').on('click', (event) => {
    event.preventDefault();
    $(event.target).parent('.message').remove();
  });
};

const inputCreateMessage = () => {
  $('#myInput').on('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addMessage(e);
      $('#myInput').val('');
      deleteMessage();
    }
  });
};


export default { inputCreateMessage, deleteMessage };
