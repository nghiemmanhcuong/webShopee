import {$,$$} from "../main.js";
const productSaleMain = $('.product-sale__main');
const nextProduct = $('.product-sale__next i');
const prevProduct = $('.product-sale__prev i');

const sale = {
    products:[
        {
            image:"./asset/img/saleProduct/sale-product1.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product2.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product3.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product4.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product5.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product6.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product7.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product8.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product9.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product10.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product11.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
        {
            image:"./asset/img/saleProduct/sale-product12.jpg",
            gallery:"635.000",
            discount:"20%",
            sold:"15"
        },
    ]
}

function renderProductSale(){
    let htmls = sale.products.map(function(product){
        return `
        <div class=" product-sale__item col l-2">
            <div class="product-sale__box pl-10 pr-10">
                <a href="#">
                    <img src="${product.image}" alt="" class="product-sale__img">
                    <div class="product-sale__gallery pt-10 pb-10 flex">
                        ${product.gallery}
                        <sup class="product-sale__subgallery">đ</sup>
                    </div>
                    <div class="product-sale__sold">
                        ĐÃ BÁN ${product.sold}
                    </div>
                    <div class="product-sale__discount">
                        <span class="product-sale__subdiscount">${product.discount}</span>
                        GIẢM
                    </div>
                </a>
            </div>
        </div>  
        `
    });
    productSaleMain.innerHTML = htmls.join('');
}

function defaultEvent(){
    const productSaleBoxs = $$('.product-sale__box');
    const sliderLength = productSaleBoxs.length / 6;
    let index = 0;
    nextProduct.onclick = ()=>{
        index++;
        if(index >= sliderLength - 1){
            index = sliderLength - 1
            nextProduct.classList.add('active')
        }
        productSaleMain.style.left = index * -(productSaleMain.offsetWidth) + 'px';
        prevProduct.classList.remove('active')
    }

    prevProduct.onclick = ()=>{
        index--;
        if(index <= 0){
            index = 0
            prevProduct.classList.add('active')
        }
        productSaleMain.style.left = index * -(productSaleMain.offsetWidth) + 'px';
        nextProduct.classList.remove('active')
    }
}

function start(){
    renderProductSale();
    defaultEvent();
}
start();