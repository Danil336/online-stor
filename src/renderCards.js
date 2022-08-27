

class RenderCards {
    render(dogs){
        const goods = document.querySelector('.goods')
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
            `<div class="images"><img class="img" src="${dog.img}" alt=""></div>
            <div class="dog-name">${dog.name}</div>
            <div class="dog-price">${dog.price}$</div>
            <div class="dog-prod">${dog.production}</div>
            <div class="dog-size">${dog.size}</div>
            <div class="dog-season">${dog.season}</div>
            <div class="btn-dogs"><button class="button-dogs to-cart button-primary" data-name="${dog.name}" data-articul="${dog.articul}">Купить</button></div>
            <div class="dog-in-cart hide">В корзине</div>
            `
            goods.append(newDog)   
            document.addEventListener('click', event => {
                if(event.target.classList.contains('to-cart')){
                    event.target.parentNode.innerHTML = 
                    `
                    <div class="dog-in-cart">В корзине</div>
                    `
                    
                }
            })
        }
    }
}
const renderCards = new RenderCards()
export default renderCards