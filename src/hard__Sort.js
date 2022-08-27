const mark = document.querySelectorAll('.mark')

export function addMarksEvenst() {
    mark.forEach(elem => {
        elem.addEventListener('click', filter)
    })
}

function filter(event) {
const dog = document.querySelectorAll('.dog')
    mark.forEach(elemMark => {
        dog.forEach(elemCard => {
            if(elemMark.classList.contains('active__mark')){
                if(elemMark.closest('.link').getAttribute('filter-type') == 'brand'){
                    if(elemCard.getAttribute('data-brand') != elemMark.getAttribute('filter-name')){
                        elemCard.classList.add('hide')
                    }  
                }
                if(elemMark.closest('.link').getAttribute('filter-type') == 'size'){
                    if(elemCard.getAttribute('data-size') != elemMark.getAttribute('filter-name')){
                        elemCard.classList.add('hide')
                    } 
                }
                if(elemMark.closest('.link').getAttribute('filter-type') == 'season'){
                    if(elemCard.getAttribute('data-season') != elemMark.getAttribute('filter-name')){
                        elemCard.classList.add('hide')
                    } 
                }
            } 
        })
    })
}
