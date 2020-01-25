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
const formResultSlim = formResult.elements.slim;
const formResultMass = formResult.elements.mass;
const formResultPFC = formResult.elements.pfc;

const gendorRadio = document.getElementsByName("gendor");

function resultSlimandMass(result) {
  formResultSlim.value = Math.round(result - 300) + " ккал";
  formResultMass.value = Math.round(result + 300) + " ккал";
}
function pfc (bodyMass) {
  const protein = bodyMass * 1.5;
  const fat = bodyMass * 1;
  const carbohydrates = bodyMass * 3;
  formResultPFC.value = `Б ${protein}, Ж ${fat}, У ${carbohydrates}`;
}

function basicMetabolism() {
  const value = formInputList.value
  formResult.reset();
  event.preventDefault();
  if (gendorRadio[0].checked) {
    const bmM =
      88.36 +
      13.4 * formInputWeight.value +
      4.8 * formInputHeight.value -
      5.7 * formInputAge.value;
    formResultBm.value = Math.round(bmM) + " ккал";
    const resultOne = value * bmM;
    formResultTotal.value = Math.round(resultOne) + " ккал";
    resultSlimandMass(resultOne);

  } else if (gendorRadio[1].checked) {
    const bmW =
      447.6 +
      9.2 * formInputWeight.value +
      3.1 * formInputHeight.value -
      4.3 * formInputAge.value;
    formResultBm.value = Math.round(bmW) + " ккал";
    //loadValue(bmW);
    const resultTwo = value * bmW;
    formResultTotal.value = Math.round(resultTwo) + " ккал";
    resultSlimandMass(resultTwo);
  }
  pfc(formInputWeight.value);
}


//formInputList.addEventListener("change", loadValue);
form.addEventListener("submit", basicMetabolism);

