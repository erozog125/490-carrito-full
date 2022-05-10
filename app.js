const mainCards = document.querySelector("main");
const selectProducts = document.getElementById("select-products");

window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);

function renderCards() {  
  fruits.map(fruit => { fruit.product === selectProducts.value ? createCards(fruit) : null });
}

function listSelect() {
  fruits.map( fruit => {
    const option = document.createElement('option');
    option.value = fruit.product;
    option.textContent = fruit.product;    
    selectProducts.appendChild(option);
  })
}


function createCards(fruits) {

  const {product, image,id,price} = fruits;

  const card = document.createElement('div');
  card.classList.add('card-product');
  const imgCard = document.createElement('img');
  imgCard.setAttribute('src',image);
  imgCard.setAttribute('alt',product);
  imgCard.classList.add('img-product');
  const nameCard = document.createElement('p');
  nameCard.textContent = product;
  nameCard.classList.add('name-product');
  const priceCard = document.createElement('p');
  priceCard.classList.add('price-product');
  priceCard.textContent = price;
  const btnAdd = document.createElement('button');
  btnAdd.setAttribute('id',id);
  btnAdd.classList.add('btn-add');
  btnAdd.textContent = 'Add to cart';

  card.appendChild(imgCard);
  card.appendChild(nameCard);
  card.appendChild(priceCard);
  card.appendChild(btnAdd);

  mainCards.appendChild(card);
}