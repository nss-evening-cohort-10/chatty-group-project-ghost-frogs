import $ from 'jquery';

const clearFunc = () => {
  $('.clearing').on('click', () => {
    $('.message').remove();
    $('.clearing').toggleClass('disabled');
  });
};

export default { clearFunc };
