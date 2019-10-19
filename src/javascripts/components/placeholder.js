import utilities from '../helpers/utilities';
import './placeholder.scss';
import m from '../helpers/data/messages';

const messages = m.getMessages();

const makeText = () => {
  let domString = `<ul>
  `;
  for (let i = 0; i < messages.length; i += 1) {
    domString += `
    <div id="messageContainer" class="card">
      <li class="card-body">
        <h6>${messages[i].name}</h6>
        <p>${messages[i].text}</p>
        <p>${messages[i].timeStamp}</p>
      </li>
    </div>
  `;
    domString += '</ul>';
  }
  utilities.printToDom('chatBox', domString);
};

export default { makeText };
