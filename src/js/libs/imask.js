import IMask from 'imask';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

window.addEventListener('load', () => {
  if (document.getElementById('form2_date_start') === null) {
    return;
  }
  else {
    let dateMask1 = IMask(
      document.getElementById('form2_date_start'),
      {
        mask: Date,
        min: tomorrow,
        max: new Date(2099, 0, 1),
      });
  }
});

window.addEventListener('load', () => {
  if (document.getElementById('form2_date_end') === null) {
    return;
  }
  else {
    let dateMask1 = IMask(
      document.getElementById('form2_date_end'),
      {
        mask: Date,
        min: tomorrow,
        max: new Date(2099, 0, 1),
      });
  }
});

window.addEventListener('load', () => {
  if (document.getElementById('form1_phone') === null && document.getElementById('form2_phone') === null) {
    return;
  }
  else {
    let phoneMask1 = document.getElementById('form1_phone');
    let phoneMask2 = document.getElementById('form2_phone');

    let maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };

    let phoneMaskInit1 = IMask(phoneMask1, maskOptions);
    let phoneMaskInit2 = IMask(phoneMask2, maskOptions);
  }
});