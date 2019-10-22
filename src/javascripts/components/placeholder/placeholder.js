import utilities from '../../helpers/utilities';
import './placeholder.scss';
import data from '../../helpers/data/messages';

const messagePrinter = () => {
  const messages = data.getMessages();
  let domString = '';
  for (let i = 0; i < messages.length; i += 1) {
    domString += `
    <div class="messageContainer message" style="margin-right: 5px; margin-left: auto;">
      <span class="closebtn" id="${messages[i].id}">×</span>
      <h6>${messages[i].name}</h6>
      <p>${messages[i].text}</p>
      <div class="timestamp">${messages[i].timeStamp}</div>
    </div>
  `;
  }
  utilities.printToDom('chatBox', domString);
};

export default { messagePrinter };
