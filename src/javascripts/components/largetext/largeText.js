import $ from 'jquery';

import './largeText.scss';

const enlargeMessageText = () => {
  console.log('clicked text check');
  const messageText = $('#chatBox');
  const cardHeading = $('h6');
  messageText.toggleClass('biggerMessageText');
  cardHeading.toggleClass('biggerMessageHeader');
};

const addLargeCheckListener = () => {
  $('#largeText').on('change', enlargeMessageText);
};

export default { addLargeCheckListener };
