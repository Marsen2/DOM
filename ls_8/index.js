export function createButton(buttonText){
    const elem = document.createElement("button").append('body')
    elem.textContent = `<button>${buttonText}</button>`
}

