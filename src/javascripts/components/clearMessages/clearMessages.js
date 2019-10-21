import $ from 'jquery';
// import utilities from '../../helpers/utilities';

const clearMessages = () => {
  $('#clearBtn').on('click', () => {
    $('#messageContainer').empty();
  });
};

export default { clearMessages };
