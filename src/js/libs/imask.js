import IMask from 'imask';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

let dateMask1 = IMask(
  document.getElementById('form2_date_start'),
  {
    mask: Date,
    min: tomorrow,
    max: new Date(2099, 0, 1),
  });

let dateMask2 = IMask(
  document.getElementById('form2_date_end'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2020, 0, 1),
  });

let phoneMask1 = document.getElementById('form1_phone');
let phoneMask2 = document.getElementById('form2_phone');

let maskOptions = {
  mask: '+{7} (000) 000-00-00'
};

let phoneMaskInit1 = IMask(phoneMask1, maskOptions);
let phoneMaskInit2 = IMask(phoneMask2, maskOptions);