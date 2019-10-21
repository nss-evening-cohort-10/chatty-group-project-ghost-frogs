import moment from 'moment';
import utilities from '../../helpers/utilities';
import './placeholder.scss';
import m from '../../helpers/data/messages';

const messages = m.getMessages();

const makeText = () => {
  let domString = [];
  for (let i = 0; i < messages.length; i += 1) {
    if (messages[i].name === 'Beetlejuice') {
      domString += `
    <div class="messageContainer message">
      <span class="closebtn">×</span>
      <h6>${messages[i].name}</h6>
      <p>${messages[i].text}</p>
      <div class="timestamp">${moment().format('LLL')}</div>
    </div>
    <br>
  `;
    } else {
      domString += `
    <div class="messageContainer message" style="margin-right: 5px; margin-left: auto;">
      <span class="closebtn">×</span>
      <h6>${messages[i].name}</h6>
      <p>${messages[i].text}</p>
      <div class="timestamp">${moment().format('LLL')}</div>
    </div>
    <br>
  `;
    }
  }
  utilities.printToDom('chatBox', domString);
};

export default { makeText };
