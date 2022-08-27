const winter = document.querySelector('.winter__season__mark')
const spring = document.querySelector('.spring__season__mark')
const summer = document.querySelector('.summer__season__mark')
const autumn = document.querySelector('.autumn__season__mark')
const goods = document.querySelector('.goods')
const mark = document.querySelectorAll('.mark')

winter.addEventListener('click', event => {
    if(!winter.classList.contains('active__mark')){
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
    if(!spring.classList.contains('active__mark')){
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
    if(!summer.classList.contains('active__mark')){
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
    if(!autumn.classList.contains('active__mark')){
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