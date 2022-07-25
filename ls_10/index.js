// algo
// 1. пройтисьс по инпуту
// 2. вставить вначало инпут
// 3. зменить атрибут с текст на password

export function finishForm(){
    let elem = document.querySelector('input')
    elem.setAttribute('password', '')

}