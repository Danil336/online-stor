
const reset = document.querySelector('.reset')
const mark = document.querySelectorAll('.mark')
const color = document.querySelectorAll('.color')
const goods = document.querySelector('.goods')

export function resetAll() {
    for(let i = 0; i < goods.children.length; i++){
        console.log(goods.children[i])
            for(let good of goods.children){
            good.classList.remove('hide').remove('hide2').remove('hide3').remove('hide4').remove('hide5')      
            }
    }
    if(reset){
    mark.forEach(elem => {
        elem.classList.remove('active__mark')
    });
    color.forEach(elem => {
        elem.classList.remove('active__color')
    });

}
}