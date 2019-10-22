import $ from 'jquery';
import messages from '../../helpers/data/messages';
import utilities from '../../helpers/utilities';

const disableButton = () => {
  $('.clearing').attr('disabled', true);
};

const clearFunc = () => {
  $('body').on('click', '.clearing', (e) => {
    e.preventDefault();
    messages.clearMessages();
    disableButton();
    utilities.printToDom('chatBox', '');
  });
};

export default { clearFunc };
