const cheap = document.querySelector('.cheap')
const exp = document.querySelector('.exp')
const rating = document.querySelector('.rating')

const goods = document.querySelector('.goods')
let replacedNode = 0

class Sort{
    byValue(attribute, isReversed = false){
        for(let i = 0; i < goods.children.length; i++){
            for(let j = i; j < goods.children.length; j++){
                if(+goods.children[i].getAttribute(attribute) < +goods.children[j].getAttribute(attribute) && isReversed){
                    replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                    insertAfter(replacedNode, goods.children[i])
                } else if(+goods.children[i].getAttribute(attribute) > +goods.children[j].getAttribute(attribute)){
                    replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                    insertAfter(replacedNode, goods.children[i])
                }
            
            }
        }
    }
}

const sort = new Sort()

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

cheap.addEventListener('click', event => {
    sort.byValue('data-costsort')
})

exp.addEventListener('click', event => {
    sort.byValue('data-costsort', true)
})

rating.addEventListener('click', event => {
    sort.byValue('data-rating')
})