export function finishList() {
  const createSixElem = document.createElement('li');
  const createFourElem = document.createElement('li');
  const createOneElem = document.createElement('li');

  createOneElem.textContent = '1';
  document.querySelector('.list').prepend(createOneElem);
  createFourElem.textContent = '4';
  document.querySelector('.special').before(createFourElem);
  createSixElem.textContent = '6';
  document.querySelector('.special').after(createSixElem);
  const createEightElem = document.createElement('li');
  createEightElem.textContent = '8';
  document.querySelector('.list').append(createEightElem);
}
