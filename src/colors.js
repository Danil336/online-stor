const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const black = document.querySelector('.black')
const white = document.querySelector('.white')
const yellow = document.querySelector('.yellow');
const goods = document.querySelector('.goods')
const color = document.querySelectorAll('.color')

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