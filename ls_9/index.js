export function finishList() {
  const createElem = document.createElement('li');

  createElem.textContent = '1';
  document.querySelector('.list').prepend(createElem);
  createElem.textContent = '4';
  document.querySelector('.special').before(createElem);
  createElem.textContent = '6';
  document.querySelector('.special').after(createElem);
  createElem.textContent = '8';
  document.querySelector('.list').append(createElem);
}
