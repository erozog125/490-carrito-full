const containerCards = document.getElementById('container-cards');
const selectProducts = document.getElementById('select-products');
const btnCreate = document.getElementById('btn-create');

const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');
let imgSelected = '';
    
window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);
btnCreate.addEventListener('click', showModal);
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);

function importImg(event) {
  const current_img =	event.target.files[0];
	const objectURL = URL.createObjectURL(current_img)
	imgSelected = objectURL;
  console.log(imgSelected);
}

function createNewProduct() {  

  const titleProduct = newProduct.value;
  const priceProduct = newPrice.value;
  const newFruit = { product:titleProduct, image:imgSelected, id:1, price:priceProduct };

  fruits.push(newFruit);
  listSelect();
  modal.style.display = 'none';  
}

function showModal() {  
  modal.style.display = 'flex';  
}

function renderCards() {
  fruits.map( fruit => { fruit.product === selectProducts.value ? createCards(fruit) : null } );
}


function listSelect() {
  selectProducts.innerHTML = '';  
  const anyOption = document.createElement('option');
  selectProducts.appendChild(anyOption);
  anyOption.textContent = 'Select a product';
  fruits.map( fruit => {
    const option = document.createElement('option');
    option.value = fruit.product;
    option.textContent = fruit.product;
    selectProducts.appendChild(option);
  });
}

function createCards(fruit) {
  const { product, image, id, price } = fruit;

  const card = document.createElement('div');
  card.classList.add('card-product');

  const imgCard = document.createElement('img');
  imgCard.setAttribute('src',image);
  imgCard.setAttribute('alt',`${id}-${product}`);
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
  btnAdd.textContent = "Add to Cart";

  card.appendChild(imgCard);
  card.appendChild(nameCard);
  card.appendChild(priceCard);
  card.appendChild(btnAdd);

  containerCards.appendChild(card);
}

