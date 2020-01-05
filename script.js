const form = document.forms.calculator;
const formInputWeight = form.elements.weight;
const formInputHeight = form.elements.height;
const formInputAge = form.elements.age;

const formLoadMinimal = form.elements.minimal;
const formLoadnWeak = form.elements.weak;
const formLoadAverage = form.elements.average;
const formLoadHigh = form.elements.high;
const formLoadExtra = form.elements.extra;

const formGenderMan = document.querySelector(".form__input_man");
const formGenderWoman = document.querySelector(".form__input_woman");
const formButton = document.querySelector(".form__button");

const formResult = document.forms.result;
const formResultTotal = formResult.elements.total;
const formResultBm = formResult.elements.bm;
const formInputList = form.elements.formList;

const gendorRadio = document.getElementsByName("gendor");

function basicMetabolism(event) {
  formResult.reset();
  event.preventDefault();
  if (gendorRadio[0].checked) {
    const bmM =
      88.36 +
      13.4 * formInputWeight.value +
      4.8 * formInputHeight.value -
      5.7 * formInputAge.value;
    formResultBm.value = Math.round(bmM) + " ккал";
    loadValue(bmM);
  } else if (gendorRadio[1].checked) {
    const bmW =
      447.6 +
      9.2 * formInputWeight.value +
      3.1 * formInputHeight.value -
      4.3 * formInputAge.value;
    formResultBm.value = Math.round(bmW) + " ккал";
    loadValue(bmW);
  }
}
function loadValue(bm) {
  let value = formInputList.value;
  let valueTotal = value * bm;
  formResultTotal.value = Math.round(valueTotal) + " ккал";
  
}

formInputList.addEventListener("change", loadValue);
form.addEventListener("submit", basicMetabolism);

