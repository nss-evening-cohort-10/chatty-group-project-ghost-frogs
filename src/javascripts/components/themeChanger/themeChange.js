import $ from 'jquery';

const changePageTheme = () => {
  const root = $('#appRoot');
  root.toggleClass('theme-light');
  root.toggleClass('theme-dark');
};

const addCheckListener = () => {
  $('#darkTheme').on('change', changePageTheme);
};

export default { addCheckListener };
