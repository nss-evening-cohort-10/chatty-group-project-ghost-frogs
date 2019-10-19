// import utilities from '../../helpers/utilities';

const clearMessages = () => {
  $('.clearBtn').click(() => {
    $('chatBox').empty();
  });
};

export default { clearMessages };
