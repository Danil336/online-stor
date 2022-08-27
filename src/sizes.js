const sizeM = document.querySelector('.m__size__mark')
const sizeL = document.querySelector('.l__size__mark') 
const sizeXL = document.querySelector('.xl__size__mark') 
const sizeXXL = document.querySelector('.xxl__size__mark') 
const goods = document.querySelector('.goods')
const mark = document.querySelectorAll('.mark')

sizeM.addEventListener('click', event => {
    if(!sizeM.classList.contains('active__mark')){
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
    if(!sizeL.classList.contains('active__mark')){
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
    if(!sizeXL.classList.contains('active__mark')){
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
    if(!sizeXXL.classList.contains('active__mark')){
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