const cartSide = document.querySelector('.cart')
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")
const deleteBtn = document.querySelectorAll('.button-delete')
const finalSum = document.querySelector('.final__sum')
const order = document.querySelector('.btn')



if(cartStorage.length){
    cartStorage.forEach(elem => {
        const {imgDog, nameDog, priceDog} = elem
        const newCard = document.createElement("div")
        newCard.classList.add('cardCart')
        newCard.setAttribute('data-cost', priceDog)
        newCard.setAttribute('data-c', priceDog)
        newCard.setAttribute('data-count', priceDog)
        newCard.setAttribute('data-value', 1)
        newCard.setAttribute('data-name', nameDog)
        
        newCard.innerHTML = `
        <div class="dog-img"><img class="img" src="${imgDog}" alt=""></div>
        <div class="dog-name">${nameDog}</div>
        <div class="dog-price">${priceDog}</div>
        <div class="minus"> - </div> <div class="dog-count__counter"> 1 </div> <div class="plus"> + </div>
        <div class="delete-btn"><button class="button-delete">Удалить из корзины</button></div>
        `

        cartSide.append(newCard)
        
        // finalSum.innerText = priceDog + '$'
    });
}
    

    const card = document.querySelectorAll('.cardCart')
    let fullPrice = 0;

const init = () => {
    
    [...card].forEach(elem => {
        fullPrice += Number(elem.getAttribute('data-cost'))
    })
    finalSum.innerText = fullPrice + '$'
}

init()


for(let i = 0; i < deleteBtn.length; i++){
    console.log(deleteBtn[i])
}

let temporeryCount = 0

document.addEventListener('click', event => {
    if(event.target.classList.contains('plus')){
        fullPrice += Number(event.target.parentNode.getAttribute('data-cost'))
        finalSum.innerText = fullPrice + '$';
        temporeryCount = Number([...event.target.parentNode.childNodes][5].innerText);
        temporeryCount += Number(event.target.parentNode.getAttribute('data-cost'));
        [...event.target.parentNode.childNodes][5].innerText = temporeryCount;
        [...event.target.parentNode.childNodes][9].innerText -= -1
        event.target.parentNode.setAttribute('data-c', [...event.target.parentNode.childNodes][5].innerText)

    }
})

document.addEventListener('click', event => {
    let fullPriceDop = fullPrice
    let countDop = Number([...event.target.parentNode.childNodes][5].innerText)
    console.log(countDop)
    if(event.target.classList.contains('minus')){
        fullPrice -= Number(event.target.parentNode.getAttribute('data-cost'))
        finalSum.innerText = fullPrice + '$';
        [...event.target.parentNode.childNodes][9].innerText -= 1
        temporeryCount = Number([...event.target.parentNode.childNodes][5].innerText);
        temporeryCount -= Number(event.target.parentNode.getAttribute('data-cost'));
        [...event.target.parentNode.childNodes][5].innerText = temporeryCount;

        event.target.parentNode.setAttribute('data-c', (Number(event.target.parentNode.getAttribute('data-c')) - Number(event.target.parentNode.getAttribute('data-cost'))))
        
        if([...event.target.parentNode.childNodes][9].innerText < 1){
            event.target.parentNode.setAttribute('data-c', Number(event.target.parentNode.getAttribute('data-cost')));
            [...event.target.parentNode.childNodes][9].innerText = 1
            fullPrice = fullPriceDop;
            [...event.target.parentNode.childNodes][5].innerText = countDop
            finalSum.innerText = fullPrice + '$';
        }
        
    }
})
console.log(cartStorage)
document.addEventListener('click', event => {
    const cart = cartStorage
    // const cardD = { nameDog, priceDog }
    if(event.target.classList.contains('button-delete')){
        event.target.parentNode.parentNode.classList.add('hide');
        // [...card].forEach(elem => {
        //     if(elem.classList.contains('hide')){
        //         // console.log(elem.getAttribute('data-name'))
        //         JSON.parse(localStorage.getItem('cart')).forEach(elem2 => {
        //             for(let i in elem2){
        //                 console.log(elem.getAttribute('data-name'))
        //                 console.log(elem2['nameDog'])
        //                 if(elem.getAttribute('data-name') == elem2['nameDog']){
        //                     // elem2 = null
        //                     // localStorage.setItem("cart", JSON.stringify([...cart]))
                            
        //                 }
        //                 break    
        //             }
        //         })
                
        //         // if()
        //     } 
        // })   
        localStorage.removeItem('cart');
            fullPrice -= Number(event.target.parentNode.parentNode.getAttribute('data-c'))
        finalSum.innerText = fullPrice + '$'
    }
})



let orderedSum = finalSum.innerText

order.addEventListener('click', event => {
    localStorage.clear()
    cartSide.classList.add('hide')
    window.location.reload()
    alert(`Заказ принят!`)
})