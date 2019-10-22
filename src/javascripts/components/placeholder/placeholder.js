import utilities from '../../helpers/utilities';
import './placeholder.scss';
import m from '../../helpers/data/messages';
import deleter from '../deleteMessages/deleteMessages';

const messages = m.getMessages();

const makeText = () => {
  let domString = [];
  for (let i = 0; i < messages.length; i += 1) {
  //   if (messages[i].name === 'Beetlejuice') {
  //     domString += `
  //   <div class="messageContainer message">
  //     <span class="closebtn" id="${messages[i].id}">×</span>
  //     <h6>${messages[i].name}</h6>
  //     <p>${messages[i].text}</p>
  //     <div class="timestamp">${messages[i].timeStamp}</div>
  //   </div>
  //   <br>
  // `;
  //   } else {
    domString += `
    <div class="messageContainer message" style="margin-right: 5px; margin-left: auto;">
      <span class="closebtn" id="${messages[i].id}">×</span>
      <h6>${messages[i].name}</h6>
      <p>${messages[i].text}</p>
      <div class="timestamp">${messages[i].timeStamp}</div>
    </div>
    <br>
  `;
  }
  utilities.printToDom('chatBox', domString);
  deleter.deleteListener();
};


export default { makeText };
