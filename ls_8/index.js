export function createButton(buttonText) {
  const elem = document.createElement('button');
  elem.textContent = buttonText;
  document.querySelector('body').append(elem);
}
