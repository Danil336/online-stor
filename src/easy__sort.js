
const goods = document.querySelector('.goods')
let replacedNode = 0

export function cheapSort() {
    for(let i = 0; i < goods.children.length; i++){
        for(let j = i; j < goods.children.length; j++){
            if(+goods.children[i].getAttribute('data-costsort') > +goods.children[j].getAttribute('data-costsort')){
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i])
                console.log(replacedNode)
            }
        }
    }
}
export function cheapSortReverse() {
    for(let i = 0; i < goods.children.length; i++){
        for(let j = i; j < goods.children.length; j++){
            if(+goods.children[i].getAttribute('data-costsort') < +goods.children[j].getAttribute('data-costsort')){
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i])
                console.log(replacedNode)
            }
        }
    }
}
export function ratingSort() {
    for(let i = 0; i < goods.children.length; i++){
        for(let j = i; j < goods.children.length; j++){
            if(+goods.children[i].getAttribute('data-rating') < +goods.children[j].getAttribute('data-rating')){
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i])
                console.log(replacedNode)
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}