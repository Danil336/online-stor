const mark = document.querySelectorAll('.mark')
const color = document.querySelectorAll('.color')

mark.forEach(elem => {
    elem.addEventListener('click', event => {
            event.target.classList.toggle('active__mark')
    })
})

color.forEach(elem => {
    elem.addEventListener('click', event => {
            event.target.classList.toggle('active__color')
    })
})