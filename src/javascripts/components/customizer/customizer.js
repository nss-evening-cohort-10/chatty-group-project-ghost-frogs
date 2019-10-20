import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './customizer.scss';

const modalPrinter = () => {
  const domString = `
  <button id="modalBtn" type="button" class="btn btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Custom Themes</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Pick a Custom Theme</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="form-check">
            <input class="form-check-input" type="radio" name="themeOptions" id="lightOption" value="light" checked>
            <label class="form-check-label" for="lightOption">
              Light Theme (default)
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="themeOptions" id="wickedOption" value="wickedwitch">
            <label class="form-check-label" for="wickedOption">
              Wicked Witch Theme
            </label>
          </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Close</button>
                <button id="themeSaveBtn" type="button" class="btn">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  `;
  utilities.printToDom('modalDiv', domString);
};

const updateTheme = () => {
  console.log($('input:radio'));
};

const saveTheme = () => {
  $('#themeSaveBtn').on('click', updateTheme);
};

const modalFunc = () => {
  $('#myModal').on('shown.bs.modal', () => {
    $('#myInput').trigger('focus');
  });
};

const init = () => {
  modalPrinter();
  modalFunc();
  saveTheme();
};

export default { init };
