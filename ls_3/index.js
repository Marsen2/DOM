export function getItemsList(){
    const elemenList = document.querySelectorAll('.technology')
    console.dir(elemenList)
    return elemenList
}
getItemsList()
export function getItemsArray(){
    let elementsArray = Array.from(document.querySelectorAll('.tool'))
    console.dir(elementsArray)
    return elementsArray
}
getItemsArray()