import $ from 'jquery';
import moment from 'moment';
import utilities from '../../helpers/utilities';

const addMessage = (e) => {
  const typedValue = e.target.value;
  console.log(typedValue);
  let newMessage = $();
  newMessage += `<div class="alert"><span class="closebtn" >&times;</span>${typedValue}</div><div>${moment().format('LLL')}</div>`;
  utilities.printToDom('messageContainer', newMessage);
};

const inputCreateMessage = () => {
  $('#myInput').on('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addMessage(e);
    }
  });
};

export default { inputCreateMessage };
