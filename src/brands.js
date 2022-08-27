const bebra = document.querySelector('.bebra__brend__mark')
const cocaCola = document.querySelector('.cocacola__brend__mark')
const mentos = document.querySelector('.mentos__brend__mark')
const goods = document.querySelector('.goods')
const mark = document.querySelectorAll('.mark')

bebra.addEventListener('click', event => {
    if(!bebra.classList.contains('active__mark')){
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
    
        if(!cocaCola.classList.contains('active__mark')){
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
        
        if(!mentos.classList.contains('active__mark')){
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