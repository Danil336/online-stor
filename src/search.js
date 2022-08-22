const search = document.querySelector('.search')


export function elasticSearch() {
    let val = search.value.trim().toLowerCase()
    let elastickItems = document.querySelectorAll('.dog')
    if(val != ''){
        elastickItems.forEach(elem => {
            if(elem.innerText.toLowerCase().search(val) == -1 && elem.innerText.toUpperCase().search(val) == -1){
                elem.classList.add('hide')
            } else{
                elem.classList.remove('hide')
            }
        })
    } else{
        elastickItems.forEach(elem => {
            elem.classList.remove('hide')
        })
    }
}