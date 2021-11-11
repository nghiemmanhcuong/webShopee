export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)
const nextBtn = $('#direction__next-icon');
const prevBtn = $('#direction__prev-icon');
const sliderList = $('.slider__list');
const sliderItems = $$('.slider__item');
const sliderDots = $$('.slider-dots__icon');
let index = 0;
let indexDot;
let sliderItemWidth = sliderItems[0].offsetWidth;
function start(){
    defaultEvent();
    setInterval(()=>{
        nextBtn.click();
    },5000)
}
start();

function removeDotActive(){
    const dotActive = $('.slider-dots__icon.active');
    sliderDots[indexDot].classList.add('active');
    dotActive.classList.remove('active');
}
function defaultEvent(){
    sliderDots.forEach((dot) => {
        dot.onclick = (e)=>{   
            indexDot = e.target.dataset.index;
            index = indexDot - 1;
            nextBtn.click(); 
        }
    });
    nextBtn.onclick = ()=>{
        index++;
        if(index >= sliderItems.length){
            index = 0;
        }
        sliderList.style.left = index * (-sliderItemWidth) + 'px';
        indexDot = index;
        removeDotActive();
    }
    
    prevBtn.onclick = ()=>{
        index--;
        if(index < 0){
            index = sliderItems.length-1;
        }
        sliderList.style.left = index * (-sliderItemWidth) + 'px';
        indexDot = index;
        removeDotActive();
    }
}
