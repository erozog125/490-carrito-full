const containerCards = document.getElementById('container-cards');
const selectProducts = document.getElementById('select-products');
const btnCreate = document.getElementById('btn-create');
let imgSelected = " ";
let idProduct = 0

const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');
const filterXPrice = document.getElementById('filterXPrice');
    
window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);
btnCreate.addEventListener('click', showModal);
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change',importImg);
closeModal.addEventListener('click',()=> modal.style.display = 'none');
filterXPrice.addEventListener('change', filterPoducts);

function filterPoducts(event) {
  const responseFilter = event.target.value === 'Menores a 2'
  ? fruits.filter( fruit => fruit.price < 2)
  : event.target.value === 'Entre 2 y 4'
  ? fruits.filter( fruit => fruit.price >= 2 && fruit.price <= 4)
  : event.target.value === 'Mayores a 4'
  ? fruits.filter( fruit => fruit.price > 4)
  : null;

  containerCards.innerHTML = '';
  responseFilter.map( fruit => createCards(fruit));
}


function importImg(event) {
  const currentImg = event.target.files[0];
  const objectURL = URL.createObjectURL(currentImg);
  imgSelected = objectURL;   
}

function createNewProduct() {
  idProduct++;
  const titleProduct = newProduct.value;
  const priceProduct = newPrice.value;
  const id = idProduct;

  const newFruit = {id:id,product: titleProduct,price: priceProduct,image: imgSelected};

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

