function inputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputTotal = inputField.value;
  const InputTotalValue = parseFloat(inputTotal);
  inputField.value = '';
  return InputTotalValue;
}

function elementValue(elementId) {
  const elementField = document.getElementById(elementId);
  const elementTotal = elementField.innerText;
  const elementValue = parseFloat(elementTotal);
  return elementValue;
}

function setElementValue(elementId, newValue) {
  const newElement = document.getElementById(elementId);
  newElement.innerText = newValue;
}