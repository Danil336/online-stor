import {cheapSort, cheapSortReverse, ratingSort} from "./easy__sort"
import {elasticSearch} from './search'
import {sliderCreate} from './nouislider.js'
import {resetAll} from './reset.js'

const screenWidth = window.screen.width
const urlJson = '../dist/json/cards.json'
const goods = document.querySelector('.goods')
const cheap = document.querySelector('.cheap')
const exp = document.querySelector('.exp')
const rating = document.querySelector('.rating')
const search = document.querySelector('.search')
const mark = document.querySelectorAll('.mark')
const color = document.querySelectorAll('.color')
const reset = document.querySelector('.reset')

const bebra = document.querySelector('.bebra__brend__mark')
const cocaCola = document.querySelector('.cocacola__brend__mark')
const mentos = document.querySelector('.mentos__brend__mark')

const sizeM = document.querySelector('.m__size__mark')
const sizeL = document.querySelector('.l__size__mark') 
const sizeXL = document.querySelector('.xl__size__mark') 
const sizeXXL = document.querySelector('.xxl__size__mark') 

const winter = document.querySelector('.winter__season__mark')
const spring = document.querySelector('.spring__season__mark')
const summer = document.querySelector('.summer__season__mark')
const autumn = document.querySelector('.autumn__season__mark')

const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const black = document.querySelector('.black')
const white = document.querySelector('.white')
const yellow = document.querySelector('.yellow');


function createCards(dogs){
    for(let dog of dogs){
        const newDog = document.createElement('div')
        newDog.classList.add('dog')
        newDog.setAttribute('data-costsort', dog.price)
        newDog.setAttribute('data-rating', dog.rating)
        newDog.setAttribute('data-name', dog.name)
        newDog.setAttribute('data-brand', dog.production)
        newDog.setAttribute('data-size', dog.size)
        newDog.setAttribute('data-season', dog.season)
        newDog.setAttribute('data-color', dog.color)
        newDog.setAttribute('data-img', dog.img2)
        newDog.innerHTML = 
        // `<div class="dogContainer">
        `<div class="images"><img class="img" src="${dog.img}" alt=""></div>
        <div class="dog-name">${dog.name}</div>
        <div class="dog-price">${dog.price}$</div>
        <div class="dog-prod">${dog.production}</div>
        <div class="dog-size">${dog.size}</div>
        <div class="dog-season">${dog.season}</div>
        <div class="btn-dogs"><button class="button-dogs to-cart button-primary" data-name="${dog.name}" data-articul="${dog.articul}">Купить</button></div>
        <div class="dog-in-cart hide">В корзине</div>
        `
        // </div>` 
        goods.append(newDog)   
        document.addEventListener('click', event => {
            if(event.target.classList.contains('to-cart')){
                // localStorage.setItem('data', 'В корзине')
                event.target.parentNode.innerHTML = 
                // `<div class="dogContainer">
                `
                <div class="dog-in-cart">В корзине</div>
                `
                
            }
        })
    }
}

new Promise((resolve, reject) => {
    resolve(fetch(urlJson))
}).then((data) => data.json())
.then((data) => {
    createCards(data)
    return data
})

cheap.addEventListener('click', event => {
    cheapSort()
})

exp.addEventListener('click', event => {
    cheapSortReverse()
})

rating.addEventListener('click', event => {
    ratingSort()
})

search.addEventListener('input', event => {
    elasticSearch()
})

mark.forEach(elem => {
    elem.addEventListener('click', event => {
        if(event.target.classList.contains('active__mark')){
            event.target.classList.remove('active__mark')
        } else{
            event.target.classList.add('active__mark')
        }
    })
})


color.forEach(elem => {
    elem.addEventListener('click', event => {
        if(event.target.classList.contains('active__color')){
            event.target.classList.remove('active__color')
        } else{
            event.target.classList.add('active__color')
        }
        
    })
})


bebra.addEventListener('click', event => {

if(bebra.classList.contains('active__mark')){
    for(let i = 0; i < goods.children.length; i++){
    if(mentos.classList.contains('active__mark') || cocaCola.classList.contains('active__mark')){

        if(goods.children[i].getAttribute('data-brand') == 'Bebra'){
            goods.children[i].classList.add('hide')
        }
    }
    if(!(mentos.classList.contains('active__mark') || cocaCola.classList.contains('active__mark'))){

        if(goods.children[i].getAttribute('data-brand') != 'Bebra'){
            goods.children[i].classList.add('hide')
        }
    }
        if(goods.children[i].getAttribute('data-brand') == 'Bebra'){
            goods.children[i].setAttribute('data-last', 'true')
        }
    }
} else{
    for(let i = 0; i < goods.children.length; i++){

        if(mentos.classList.contains('active__mark') || cocaCola.classList.contains('active__mark')){

            if(goods.children[i].getAttribute('data-brand') == 'Bebra'){
                goods.children[i].classList.add('hide')
            }
        } else{
            goods.children[i].classList.remove('hide')
        }
            goods.children[i].removeAttribute('data-last')
    }
}

for(let i = 0; i < goods.children.length; i++){

    if(goods.children[i].getAttribute('data-last') == 'true'){
        goods.children[i].classList.remove('hide')
    }
}
})


cocaCola.addEventListener('click', event => {

    if(cocaCola.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){
    
        if(mentos.classList.contains('active__mark') || bebra.classList.contains('active__mark')){
    
            if(goods.children[i].getAttribute('data-brand') == 'CocaCola'){
                goods.children[i].classList.add('hide')
            }
    
        }
        if(!(mentos.classList.contains('active__mark') || bebra.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-brand') != 'CocaCola'){
                goods.children[i].classList.add('hide')
            }
    
        }
    
            if(goods.children[i].getAttribute('data-brand') == 'CocaCola'){
                goods.children[i].setAttribute('data-last', 'true')
            }
    
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){
    
            if(mentos.classList.contains('active__mark') || bebra.classList.contains('active__mark')){
    
                if(goods.children[i].getAttribute('data-brand') == 'CocaCola'){
                    goods.children[i].classList.add('hide')
                }
    
            } else{
                goods.children[i].classList.remove('hide')
    
            }
                
                goods.children[i].removeAttribute('data-last')
           
        }
    }
    
    for(let i = 0; i < goods.children.length; i++){
    
        if(goods.children[i].getAttribute('data-last') == 'true'){
            goods.children[i].classList.remove('hide')
        }
    }
})


mentos.addEventListener('click', event => {
    
    if(mentos.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){
    
        if(cocaCola.classList.contains('active__mark') || bebra.classList.contains('active__mark')){
    
            if(goods.children[i].getAttribute('data-brand') == 'Mentos'){
                goods.children[i].classList.add('hide')
            }
    
        }
        if(!(cocaCola.classList.contains('active__mark') || bebra.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-brand') != 'Mentos'){
                goods.children[i].classList.add('hide')
            }
    
        }
    
            if(goods.children[i].getAttribute('data-brand') == 'Mentos'){
                goods.children[i].setAttribute('data-last', 'true')
            }
    
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){
    
            if(cocaCola.classList.contains('active__mark') || bebra.classList.contains('active__mark')){
    
                if(goods.children[i].getAttribute('data-brand') == 'Mentos'){
                    goods.children[i].classList.add('hide')
                }
    
            } else{
                goods.children[i].classList.remove('hide')
    
            }
                
                goods.children[i].removeAttribute('data-last')
           
        }
    }
    
    for(let i = 0; i < goods.children.length; i++){
    
        if(goods.children[i].getAttribute('data-last') == 'true'){
            goods.children[i].classList.remove('hide')
        }
    }
})



sizeM.addEventListener('click', event => {
    if(sizeM.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){
    
        if(sizeL.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark')){
    
            if(goods.children[i].getAttribute('data-size') == 'M'){
                goods.children[i].classList.add('hide2')
            }
    
        }
        if(!(sizeL.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-size') != 'M'){
                goods.children[i].classList.add('hide2')
            }
    
        }
    
            if(goods.children[i].getAttribute('data-size') == 'M'){
                goods.children[i].setAttribute('data-last2', 'true')
            }
    
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){
    
            if(sizeL.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark')){
    
                if(goods.children[i].getAttribute('data-size') == 'M'){
                    goods.children[i].classList.add('hide2')
                }
    
            } else{
                goods.children[i].classList.remove('hide2')
    
            }
                
                goods.children[i].removeAttribute('data-last2')
           
        }
    }
    
    for(let i = 0; i < goods.children.length; i++){
    
        if(goods.children[i].getAttribute('data-last2') == 'true'){
            goods.children[i].classList.remove('hide2')
        }
    }
})

sizeL.addEventListener('click', event => {
    if(sizeL.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){
    
        if(sizeM.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark')){
    
            if(goods.children[i].getAttribute('data-size') == 'L'){
                goods.children[i].classList.add('hide2')
            }
    
        }
        if(!(sizeM.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-size') != 'L'){
                goods.children[i].classList.add('hide2')
            }
    
        }
    
            if(goods.children[i].getAttribute('data-size') == 'L'){
                goods.children[i].setAttribute('data-last2', 'true')
            }
    
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){
    
            if(sizeM.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark')){
    
                if(goods.children[i].getAttribute('data-size') == 'L'){
                    goods.children[i].classList.add('hide2')
                }
    
            } else{
                goods.children[i].classList.remove('hide2')
    
            }
                
                goods.children[i].removeAttribute('data-last2')
           
        }
    }
    
    for(let i = 0; i < goods.children.length; i++){
    
        if(goods.children[i].getAttribute('data-last2') == 'true'){
            goods.children[i].classList.remove('hide2')
        }
    }
})

sizeXL.addEventListener('click', event => {
    if(sizeXL.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){
    
        if(sizeL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark') || sizeM.classList.contains('active__mark')){
    
            if(goods.children[i].getAttribute('data-size') == 'XL'){
                goods.children[i].classList.add('hide2')
            }
    
        }
        if(!(sizeL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark') || sizeM.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-size') != 'XL'){
                goods.children[i].classList.add('hide2')
            }
    
        }
    
            if(goods.children[i].getAttribute('data-size') == 'XL'){
                goods.children[i].setAttribute('data-last2', 'true')
            }
    
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){
    
            if(sizeL.classList.contains('active__mark') || sizeXXL.classList.contains('active__mark') || sizeM.classList.contains('active__mark')){
    
                if(goods.children[i].getAttribute('data-size') == 'XL'){
                    goods.children[i].classList.add('hide2')
                }
    
            } else{
                goods.children[i].classList.remove('hide2')
    
            }
                
                goods.children[i].removeAttribute('data-last2')
           
        }
    }
    
    for(let i = 0; i < goods.children.length; i++){
    
        if(goods.children[i].getAttribute('data-last2') == 'true'){
            goods.children[i].classList.remove('hide2')
        }
    }
})

sizeXXL.addEventListener('click', event => {
    if(sizeXXL.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){
    
        if(sizeL.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeM.classList.contains('active__mark')){
    
            if(goods.children[i].getAttribute('data-size') == 'XXL'){
                goods.children[i].classList.add('hide2')
            }
    
        }
        if(!(sizeL.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeM.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-size') != 'XXL'){
                goods.children[i].classList.add('hide2')
            }
    
        }
    
            if(goods.children[i].getAttribute('data-size') == 'XXL'){
                goods.children[i].setAttribute('data-last2', 'true')
            }
    
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){
    
            if(sizeL.classList.contains('active__mark') || sizeXL.classList.contains('active__mark') || sizeM.classList.contains('active__mark')){
    
                if(goods.children[i].getAttribute('data-size') == 'XXL'){
                    goods.children[i].classList.add('hide2')
                }
    
            } else{
                goods.children[i].classList.remove('hide2')
    
            }
                
                goods.children[i].removeAttribute('data-last2')
           
        }
    }
    
    for(let i = 0; i < goods.children.length; i++){
    
        if(goods.children[i].getAttribute('data-last2') == 'true'){
            goods.children[i].classList.remove('hide2')
        }
    }
})



winter.addEventListener('click', event => {
    if(winter.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){  
        if(spring.classList.contains('active__mark') || autumn.classList.contains('active__mark') || summer.classList.contains('active__mark')){
            if(goods.children[i].getAttribute('data-season') == 'Winter'){
                goods.children[i].classList.add('hide3')
            } 
        }
        if(!(spring.classList.contains('active__mark') || autumn.classList.contains('active__mark') || summer.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-season') != 'Winter'){
                goods.children[i].classList.add('hide3')
            } 
        } 
            if(goods.children[i].getAttribute('data-season') == 'Winter'){
                goods.children[i].setAttribute('data-last3', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(spring.classList.contains('active__mark') || autumn.classList.contains('active__mark') || summer.classList.contains('active__mark')){   
                if(goods.children[i].getAttribute('data-season') == 'Winter'){
                    goods.children[i].classList.add('hide3')
                }
            } else{
                goods.children[i].classList.remove('hide3')   
            }               
                goods.children[i].removeAttribute('data-last3')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last3') == 'true'){
            goods.children[i].classList.remove('hide3')
        }
    }
})

spring.addEventListener('click', event => {
    if(spring.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){  
        if(winter.classList.contains('active__mark') || autumn.classList.contains('active__mark') || summer.classList.contains('active__mark')){
            if(goods.children[i].getAttribute('data-season') == 'Spring'){
                goods.children[i].classList.add('hide3')
            } 
        }
        if(!(winter.classList.contains('active__mark') || autumn.classList.contains('active__mark') || summer.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-season') != 'Spring'){
                goods.children[i].classList.add('hide3')
            } 
        } 
            if(goods.children[i].getAttribute('data-season') == 'Spring'){
                goods.children[i].setAttribute('data-last3', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(winter.classList.contains('active__mark') || autumn.classList.contains('active__mark') || summer.classList.contains('active__mark')){   
                if(goods.children[i].getAttribute('data-season') == 'Spring'){
                    goods.children[i].classList.add('hide3')
                }
            } else{
                goods.children[i].classList.remove('hide3')   
            }               
                goods.children[i].removeAttribute('data-last3')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last3') == 'true'){
            goods.children[i].classList.remove('hide3')
        }
    }
})

summer.addEventListener('click', event => {
    if(summer.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){  
        if(spring.classList.contains('active__mark') || autumn.classList.contains('active__mark') || winter.classList.contains('active__mark')){
            if(goods.children[i].getAttribute('data-season') == 'Summer'){
                goods.children[i].classList.add('hide3')
            } 
        }
        if(!(spring.classList.contains('active__mark') || autumn.classList.contains('active__mark') || winter.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-season') != 'Summer'){
                goods.children[i].classList.add('hide3')
            } 
        } 
            if(goods.children[i].getAttribute('data-season') == 'Summer'){
                goods.children[i].setAttribute('data-last3', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(spring.classList.contains('active__mark') || autumn.classList.contains('active__mark') || winter.classList.contains('active__mark')){   
                if(goods.children[i].getAttribute('data-season') == 'Summer'){
                    goods.children[i].classList.add('hide3')
                }
            } else{
                goods.children[i].classList.remove('hide3')   
            }               
                goods.children[i].removeAttribute('data-last3')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last3') == 'true'){
            goods.children[i].classList.remove('hide3')
        }
    }
})

autumn.addEventListener('click', event => {
    if(autumn.classList.contains('active__mark')){
        for(let i = 0; i < goods.children.length; i++){  
        if(spring.classList.contains('active__mark') || winter.classList.contains('active__mark') || summer.classList.contains('active__mark')){
            if(goods.children[i].getAttribute('data-season') == 'Autumn'){
                goods.children[i].classList.add('hide3')
            } 
        }
        if(!(spring.classList.contains('active__mark') || winter.classList.contains('active__mark') || summer.classList.contains('active__mark'))){
    
            if(goods.children[i].getAttribute('data-season') != 'Autumn'){
                goods.children[i].classList.add('hide3')
            } 
        } 
            if(goods.children[i].getAttribute('data-season') == 'Autumn'){
                goods.children[i].setAttribute('data-last3', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(spring.classList.contains('active__mark') || winter.classList.contains('active__mark') || summer.classList.contains('active__mark')){   
                if(goods.children[i].getAttribute('data-season') == 'Autumn'){
                    goods.children[i].classList.add('hide3')
                }
            } else{
                goods.children[i].classList.remove('hide3')   
            }               
                goods.children[i].removeAttribute('data-last3')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last3') == 'true'){
            goods.children[i].classList.remove('hide3')
        }
    }
})


red.addEventListener('click', event => {
    if(red.classList.contains('active__color')){
        for(let i = 0; i < goods.children.length; i++){  
        if(black.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || blue.classList.contains('active__color')){
            if(goods.children[i].getAttribute('data-color').indexOf('red') != -1){
                goods.children[i].classList.add('hide4')
            } 
        }
        if(!(black.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || blue.classList.contains('active__color'))){
    
            if(!goods.children[i].getAttribute('data-color').indexOf('red') != -1){
                goods.children[i].classList.add('hide4')
            } 
        } 
            if(goods.children[i].getAttribute('data-color').indexOf('red') != -1){
                goods.children[i].setAttribute('data-last4', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(black.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || blue.classList.contains('active__color')){   
                if(goods.children[i].getAttribute('data-color').indexOf('red') != -1){
                    goods.children[i].classList.add('hide4')
                }
            } else{
                goods.children[i].classList.remove('hide4')   
            }               
                goods.children[i].removeAttribute('data-last4')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last4') == 'true'){
            goods.children[i].classList.remove('hide4')
        }
    }
})

blue.addEventListener('click', event => {
    if(blue.classList.contains('active__color')){
        for(let i = 0; i < goods.children.length; i++){  
        if(black.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color')){
            if(goods.children[i].getAttribute('data-color').indexOf('blue') != -1){
                goods.children[i].classList.add('hide4')
            } 
        }
        if(!(black.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color'))){
    
            if(!goods.children[i].getAttribute('data-color').indexOf('blue') != -1){
                goods.children[i].classList.add('hide4')
            } 
        } 
            if(goods.children[i].getAttribute('data-color').indexOf('blue') != -1){
                goods.children[i].setAttribute('data-last4', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(black.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color')){   
                if(goods.children[i].getAttribute('data-color').indexOf('blue') != -1){
                    goods.children[i].classList.add('hide4')
                }
            } else{
                goods.children[i].classList.remove('hide4')   
            }               
                goods.children[i].removeAttribute('data-last4')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last4') == 'true'){
            goods.children[i].classList.remove('hide4')
        }
    }
})

black.addEventListener('click', event => {
    if(black.classList.contains('active__color')){
        for(let i = 0; i < goods.children.length; i++){  
        if(blue.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color')){
            if(goods.children[i].getAttribute('data-color').indexOf('black') != -1){
                goods.children[i].classList.add('hide4')
            } 
        }
        if(!(blue.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color'))){
    
            if(!goods.children[i].getAttribute('data-color').indexOf('black') != -1){
                goods.children[i].classList.add('hide4')
            } 
        } 
            if(goods.children[i].getAttribute('data-color').indexOf('black') != -1){
                goods.children[i].setAttribute('data-last4', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(blue.classList.contains('active__color') || white.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color')){   
                if(goods.children[i].getAttribute('data-color').indexOf('black') != -1){
                    goods.children[i].classList.add('hide4')
                }
            } else{
                goods.children[i].classList.remove('hide4')   
            }               
                goods.children[i].removeAttribute('data-last4')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last4') == 'true'){
            goods.children[i].classList.remove('hide4')
        }
    }
})

white.addEventListener('click', event => {
    if(white.classList.contains('active__color')){
        for(let i = 0; i < goods.children.length; i++){  
        if(blue.classList.contains('active__color') || black.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color')){
            if(goods.children[i].getAttribute('data-color').indexOf('white') != -1){
                goods.children[i].classList.add('hide4')
            } 
        }
        if(!(blue.classList.contains('active__color') || black.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color'))){
    
            if(!goods.children[i].getAttribute('data-color').indexOf('white') != -1){
                goods.children[i].classList.add('hide4')
            } 
        } 
            if(goods.children[i].getAttribute('data-color').indexOf('white') != -1){
                goods.children[i].setAttribute('data-last4', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(blue.classList.contains('active__color') || black.classList.contains('active__color') || yellow.classList.contains('active__color') || red.classList.contains('active__color')){   
                if(goods.children[i].getAttribute('data-color').indexOf('white') != -1){
                    goods.children[i].classList.add('hide4')
                }
            } else{
                goods.children[i].classList.remove('hide4')   
            }               
                goods.children[i].removeAttribute('data-last4')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last4') == 'true'){
            goods.children[i].classList.remove('hide4')
        }
    }
})

yellow.addEventListener('click', event => {
    if(yellow.classList.contains('active__color')){
        for(let i = 0; i < goods.children.length; i++){  
        if(blue.classList.contains('active__color') || black.classList.contains('active__color') || white.classList.contains('active__color') || red.classList.contains('active__color')){
            if(goods.children[i].getAttribute('data-color').indexOf('yellow') != -1){
                goods.children[i].classList.add('hide4')
            } 
        }
        if(!(blue.classList.contains('active__color') || black.classList.contains('active__color') || white.classList.contains('active__color') || red.classList.contains('active__color'))){
    
            if(!goods.children[i].getAttribute('data-color').indexOf('yellow') != -1){
                goods.children[i].classList.add('hide4')
            } 
        } 
            if(goods.children[i].getAttribute('data-color').indexOf('yellow') != -1){
                goods.children[i].setAttribute('data-last4', 'true')
            }
        }
    } else{
        for(let i = 0; i < goods.children.length; i++){   
           if(blue.classList.contains('active__color') || black.classList.contains('active__color') || white.classList.contains('active__color') || red.classList.contains('active__color')){   
                if(goods.children[i].getAttribute('data-color').indexOf('yellow') != -1){
                    goods.children[i].classList.add('hide4')
                }
            } else{
                goods.children[i].classList.remove('hide4')   
            }               
                goods.children[i].removeAttribute('data-last4')          
        }
    }  
    for(let i = 0; i < goods.children.length; i++){
        if(goods.children[i].getAttribute('data-last4') == 'true'){
            goods.children[i].classList.remove('hide4')
        }
    }
})

sliderCreate()


reset.addEventListener('click', event => {
    window.location.reload()
    // resetAll()
    
})

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





