import {$,$$} from "../main.js";
const mallMain = $('.mall-slider__main');
const mallBox = $$('.mall-slider__box');
const mallSlideNext = $('#mall-slider__next-icon'); 
const mallSlidePrev = $('#mall-slider__prev-icon');
const mallDots = $$('.mall-dots__icon');
const mallProductNext = $('#mall-product__next'); 
const mallProductPrev = $('#mall-product__prev');
const mallProductMain = $('.mall-product__main');
const mallProductItem = $$('.mall-product__item');

let indexProduct = 0;
let indexSlider = 0;
let indexDot;
function removeDotactive(){
    const dotActive = $('.mall-dots__icon.active');
    dotActive.classList.remove('active');
    mallDots[indexDot].classList.add('active');
}

function defaultEvent(){
    mallSlideNext.onclick = ()=>{
        indexSlider++;
        if(indexSlider >= mallBox.length){
            indexSlider = 0;
        }
        mallMain.style.left = indexSlider * -(mallBox[0].offsetWidth) + 'px';
        indexDot = indexSlider;
        removeDotactive();
    }
    mallSlidePrev.onclick = ()=>{
        indexSlider--;
        if(indexSlider < 0){
            indexSlider = mallBox.length - 1;
        }
        mallMain.style.left = indexSlider * -(mallBox[0].offsetWidth) + 'px';
        indexDot = indexSlider;
        removeDotactive();
    }

    mallDots.forEach((dot)=>{
        dot.onclick = (e)=>{
            indexSlider = (e.target.dataset.index) - 1;
            mallSlideNext.click();
        }
    });

    mallProductNext.onclick = ()=>{
        indexProduct++;
        if(indexProduct >= mallProductItem.length - 1){
            indexProduct = mallProductItem.length - 1;
            mallProductNext.classList.add('active');
        }
        mallProductMain.style.left = indexProduct * -(mallProductMain.offsetWidth) + 'px';
        mallProductPrev.classList.remove('active');
    }

    mallProductPrev.onclick = ()=>{
        indexProduct--;
        if(indexProduct <= 0){
            indexProduct = 0;
            mallProductPrev.classList.add('active');
        }
        mallProductMain.style.left = indexProduct * -(mallProductMain.offsetWidth) + 'px';
        mallProductNext.classList.remove('active');
    }
}

function start(){
    defaultEvent();
    setInterval(()=>{
        mallSlideNext.click();
    },4000)
}
start();
