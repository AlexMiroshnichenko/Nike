'use strict';

const cardInner = document.querySelector('.card-inner');

for (let i = 0; i < product.length; i++) {
  cardInner.innerHTML += `
    <article class="product-card">
        <div class="product-card-img">
            <img src="${product[i].img}" width="400" height="390" alt="Кроссовки Nike Dunk High Retro Premium" loading="lazy">
        </div>
        <div class="product-card-info">
            <h3 class="product-card-title">
                ${product[i].model}
            </h3>
            <span class="product-card-price">${product[i].price}</span>
            <ul class="product-card-list">
                <li class="product-card-item">
                    Цвет:<span>${product[i].color}</span>
                </li>
                <li class="product-card-item">
                    Отзывы:<span>${product[i].rewies}</span>
                </li>
            </ul>
            <a class="product-card-link" href="#" target="_blank">Купить</a>
        </div>
    </article>`;
}
