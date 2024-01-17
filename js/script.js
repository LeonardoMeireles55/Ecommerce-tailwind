let productsTech = [
  { name: 'Smartphone', price: 999.99, image: 'https://source.unsplash.com/featured/250x200?smarthphone' },
  { name: 'PC Gamer', price: 2499.99, image: 'https://source.unsplash.com/featured/250x200?computer' },
  { name: 'Fone de Ouvido Bluetooth', price: 149.99, image: 'https://source.unsplash.com/featured/250x200?headphone' },
  { name: 'Mouse', price: 49.99, image: 'https://source.unsplash.com/featured/250x200?mouse' },
  { name: 'Teclado', price: 79.99, image: 'https://source.unsplash.com/featured/250x200?keyboard' },
  { name: 'Joystick', price: 69.99, image: 'https://source.unsplash.com/featured/250x200?joystick' },
  { name: 'PS4', price: 299.99, image: 'https://source.unsplash.com/featured/250x200?PS4' },
  { name: 'Relógio', price: 129.99, image: 'https://source.unsplash.com/featured/250x200?relogio' }
];

function createProductTags(name, price, image) {
  let div = document.createElement('div');
  div.className = 'flex flex-col items-center justify-center bg-white p-6 shadow-xl rounded-md text-center';

  let title = document.createElement('h1');
  title.className = 'text-gray-800 text-md font-bold mt-2';
  title.textContent = name;

  let priceElement = document.createElement('p');
  priceElement.className = 'text-gray-500 text-md';
  priceElement.textContent = '$' + price;

  let imageElement = document.createElement('img');
  imageElement.src = image;
  imageElement.className = 'rounded-md border-2 border-gray-100 p-1 rounded-md shadow-lg';

  let button = document.createElement('button');
  button.className = 'bg-blue-800 text-sm text-white px-4 py-2 m-1 rounded-md shadow-lg hover:bg-blue-700';
  button.textContent = 'COMPRAR';

  div.appendChild(imageElement);
  div.appendChild(title);
  div.appendChild(priceElement);
  div.appendChild(button);


  return div;
}

//Sort functions
function orderProductsByPriceAsc(products) {
  const sortedProducts = products.map((product) => product).sort((a, b) => a.price - b.price);
    return sortedProducts;
}

function orderProductsByPriceDesc(products) {
  const sortedProducts = products.map((product) => product).sort((a, b) => b.price - a.price);
    return sortedProducts;
}

// forEach
orderProductsByPriceDesc(productsTech).forEach((product) => {
  let productElement = createProductTags(product.name.toUpperCase(), product.price, product.image);

  document.getElementById('products-list').appendChild(productElement);
})

// Classic For
for(i = 0; i <= productsTech.length - 1; i++) {
  let productElement = createProductTags(productsTech[i].name.toUpperCase(), productsTech[i].price, productsTech[i].image);

  document.getElementById('products-list').appendChild(productElement);
};

//While
i = 0
while(i <= productsTech.length - 1) {
  let productElement = createProductTags(productsTech[i].name.toUpperCase(), productsTech[i].price, productsTech[i].image);
  document.getElementById('products-list').appendChild(productElement);
  i++
}
