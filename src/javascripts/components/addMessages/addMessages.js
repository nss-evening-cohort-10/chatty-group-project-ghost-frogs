import $ from 'jquery';
import 'bootstrap';
import moment from 'moment';
import './addMessages.scss';

const addMessage = (e) => {
  const typedValue = e.target.value;
  console.log(typedValue);
  let newMessage = [];
  newMessage += `
    <div class="newMessageContainer">
      <span class="closebtn">×</span>
      <p>${typedValue}</p>
      <div>${moment().format('LLL')}</div>
    </div>`;
  $('#chatBox').prepend(newMessage);
};

const inputCreateMessage = () => {
  $('#myInput').on('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addMessage(e);
      $('#myInput').val('');
    }
  });
};

export default { inputCreateMessage };
