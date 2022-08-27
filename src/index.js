import renderCards from "./renderCards"
import {sliderCreate} from './nouislider.js'
import './activeMarks'
// import './colors'
// import './brands'
// import './seasons'
// import './sizes'
import { addMarksEvenst } from "./hard__Sort"
import './easy__sort'
import './reset'
import './search'

const urlJson = '../dist/json/cards.json'

new Promise((resolve, reject) => {
    resolve(fetch(urlJson))
}).then((data) => data.json())
.then((data) => {
    renderCards.render(data)
    // return data
}).then(() => addMarksEvenst('data-brand'))


sliderCreate()

const redDot = document.querySelector('.red__dot')

document.addEventListener('click', event => {
    if(event.target.classList.contains('to-cart')){
        
        const imgDog = event.target.parentNode.parentNode.getAttribute('data-img')
        const nameDog = event.target.parentNode.parentNode.getAttribute('data-name')
        const priceDog = event.target.parentNode.parentNode.getAttribute('data-costsort')
        const cartStorage = localStorage.getItem("cart") || "[]"
        const cart = JSON.parse(cartStorage)
        const card = { imgDog, nameDog, priceDog }
        localStorage.setItem("cart", JSON.stringify([...cart, card]))
        event.target.classList.add('goodBuyMark')
        redDot.classList.remove('hide')
    }
})





