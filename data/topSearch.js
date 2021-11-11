import {$,$$} from "../main.js";
const topSearchSliderMain = $('.top-search-slider__main');
const topSearchNext = $('#top-search__next');
const topSearchPrev = $('#top-search__prev');
let index = 0;

const topsearch = {
    products:[
        {
            image:"./asset/img/top-search/top-search1.jfif",
            name:"Bộ Chăn Ga Gối Cotton",
            sold:"173"
        },
        {
            image:"./asset/img/top-search/top-search2.jfif",
            name:"Nước Tẩy Trang L'Oreal Paris 3 In 1",
            sold:"77"
        },
        {
            image:"./asset/img/top-search/top-search3.jfif",
            name:"Tai Nghe Nhét Tai",
            sold:"66"
        },
        {
            image:"./asset/img/top-search/top-search4.jfif",
            name:"Bút Mực Gel",
            sold:"50"
        },
        {
            image:"./asset/img/top-search/top-search5.jfif",
            name:"Áo Sweater",
            sold:"68"
        },
        {
            image:"./asset/img/top-search/top-search6.jfif",
            name:"Dây Sạc Iphone",
            sold:"129"
        },
        {
            image:"./asset/img/top-search/top-search7.jfif",
            name:"Quần Lót Nam Co Dãn",
            sold:"43"
        },
        {
            image:"./asset/img/top-search/top-search8.jfif",
            name:"Áo Khoác Bomber Unisex",
            sold:"60"
        },
        {
            image:"./asset/img/top-search/top-search9.jfif",
            name:"Khẩu Trang Kháng Khuẩn",
            sold:"54"
        },
        {
            image:"./asset/img/top-search/top-search10.jfif",
            name:"Áo Hoodie",
            sold:"69"
        },
        {
            image:"./asset/img/top-search/top-search11.jfif",
            name:"Quần Legging Cạp Cao",
            sold:"49"
        },
        {
            image:"./asset/img/top-search/top-search12.jfif",
            name:"Giấy Ăn Gấu Trúc Sipiao",
            sold:"57"
        },
        {
            image:"./asset/img/top-search/top-search13.jfif",
            name:"Quần Lót Nam Co Dãn",
            sold:"43"
        },
        {
            image:"./asset/img/top-search/top-search14.jfif",
            name:"Áo Khoác Bomber Unisex",
            sold:"60"
        },
        {
            image:"./asset/img/top-search/top-search15.jfif",
            name:"Khẩu Trang Kháng Khuẩn",
            sold:"54"
        },
        {
            image:"./asset/img/top-search/top-search16.jfif",
            name:"Áo Hoodie",
            sold:"69"
        },
        {
            image:"./asset/img/top-search/top-search17.jfif",
            name:"Quần Legging Cạp Cao",
            sold:"49"
        },
        {
            image:"./asset/img/top-search/top-search18.jfif",
            name:"Giấy Ăn Gấu Trúc Sipiao",
            sold:"57"
        },
    ]
}

function renderTopSearchSlider(){
    const htmls = topsearch.products.map((product)=>{
        return `
        <div class="col l-2">
            <div class="top-search-slider__box pt-20 pb-20 pl-10 pr-10">
                <a href="#">
                    <div class="top-search-slider-box__content">
                        <img src="${product.image}" alt=""
                            class="top-search-slider-box-content__img">
                        <div class="top-search-slider-box-content__badge">
                            TOP
                        </div>
                        <div class="top-search-slider-box-content__sold pt-5 pb-5">
                            Bán ${product.sold}k+ / tháng
                        </div>
                    </div>
                    <div class="top-search-slider-box-title pt-10">
                       ${product.name}
                    </div>
                </a>
            </div>
        </div>     
        `
    });
    topSearchSliderMain.innerHTML = htmls.join('');
}

function defaultEvent(){
    const topSearchSliderBox = $$('.top-search-slider__box');
    const coutLength = topSearchSliderBox.length / 6;
    topSearchNext.onclick = ()=>{
        index++;
        if(index >= coutLength - 1){
            index = coutLength - 1;
            topSearchNext.classList.add('active');
        }
        topSearchSliderMain.style.left = index * -(topSearchSliderMain.offsetWidth) + 'px';
        topSearchPrev.classList.remove('active');
    }

    topSearchPrev.onclick = ()=>{
        index--;
        if(index <= 0){
            index = 0;
            topSearchPrev.classList.add('active');
        }
        topSearchSliderMain.style.left = index * -(topSearchSliderMain.offsetWidth) + 'px';
        topSearchNext.classList.remove('active');
    }
}


function start(){
    renderTopSearchSlider();
    defaultEvent();
}
start();