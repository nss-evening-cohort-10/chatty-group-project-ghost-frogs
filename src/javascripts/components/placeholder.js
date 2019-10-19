import moment from 'moment';
import utilities from '../helpers/utilities';
import './placeholder.scss';
import m from '../helpers/data/messages';

const messages = m.getMessages();

const makeText = () => {
  let domString = `<ul>
  `;
  for (let i = 0; i < messages.length; i += 1) {
    domString += `
    <div id="messageContainer">
      <li class="inner">
        <h6>${messages[i].name}</h6>
        <p>${messages[i].text}</p>
      </li>
    </div>
  `;
    domString += '</ul>';
    domString += `<div>${moment().format('LLL')}
    </div>`;
  }
  utilities.printToDom('chatBox', domString);
};


// const timeStamp = () => {
//   moment().format('LLL');
//   $("moment().format('LLL')").append($('.inner'));
// };

export default { makeText };
