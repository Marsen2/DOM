export function createButton(buttonText) {
  const elem = document.createElement('button');
  elem.textContent  = buttonText;
  elem.querySelector("body").append(elem);
}
