let productsTech = [
  { name: 'Smartphone', price: 999.99, image: 'https://source.unsplash.com/featured/250x200?smarthphone', ratingsCount: 2  },
  { name: 'PC Gamer', price: 2499.99, image: 'https://source.unsplash.com/featured/250x200?computer', ratingsCount: 3  },
  { name: 'Fone de Ouvido Bluetooth', price: 149.99, image: 'https://source.unsplash.com/featured/250x200?headphone' , ratingsCount: 4 },
  { name: 'Mouse', price: 49.99, image: 'https://source.unsplash.com/featured/250x200?mouse', ratingsCount: 5  },
  { name: 'Teclado', price: 79.99, image: 'https://source.unsplash.com/featured/250x200?keyboard', ratingsCount: 2  },
  { name: 'Joystick', price: 69.99, image: 'https://source.unsplash.com/featured/250x200?joystick', ratingsCount: 1  },
  { name: 'PS4', price: 299.99, image: 'https://source.unsplash.com/featured/250x200?PS4', ratingsCount: 4 },
  { name: 'Relógio', price: 129.99, image: 'https://source.unsplash.com/featured/250x200?relogio', ratingsCount: 3 }
];

function createProductTags(name, price, image, ratingsCount) {
  let div = document.createElement('div');
  div.className = 'flex flex-col items-center justify-center bg-gray-100 p-6 shadow-xl rounded-md text-center';

  let title = document.createElement('h1');
  title.className = 'text-gray-800 text-md font-bold mt-2';
  title.textContent = name;

  let priceElement = document.createElement('p');
  priceElement.className = 'text-gray-600 text-xs  line-through';
  priceElement.textContent = 'R$' + price;

  let offPriceElement = document.createElement('p');
  offPriceElement.className = 'text-gray-700 text-md';
  let discountedPrice = (+price - (+price * 10 / 100)).toFixed(2);
  offPriceElement.textContent = 'R$' + discountedPrice;

  let imageElement = document.createElement('img');
  imageElement.src = image;
  imageElement.className = 'border-2 border-gray-500 p-4 rounded-md shadow-lg';

  let button = document.createElement('button');
  button.className = 'bg-blue-800 text-sm text-white px-4 py-2 mt-1 rounded-md shadow-lg hover:bg-blue-500';
  button.textContent = 'COMPRAR';

  let ratingsContainer = document.createElement('ratings');
  ratingsContainer.className = 'text-2xl mt-2 text-yellow-400'
  ratingsContainer.textContent = '★'.repeat(ratingsCount);

  div.appendChild(imageElement);
  div.appendChild(title);
  div.appendChild(offPriceElement);
  div.appendChild(priceElement);
  div.appendChild(button);
  div.appendChild(ratingsContainer);



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
  let productElement = createProductTags(product.name.toUpperCase(), product.price, product.image, product.ratingsCount);

  document.getElementById('products-list').appendChild(productElement);
})

// // Classic For
// for(i = 0; i <= productsTech.length - 1; i++) {
//   let productElement = createProductTags(productsTech[i].name.toUpperCase(), productsTech[i].price, productsTech[i].image);

//   document.getElementById('products-list').appendChild(productElement);
// };

//While
// i = 0
// while(i <= productsTech.length - 1) {
//   let productElement = createProductTags(productsTech[i].name.toUpperCase(), productsTech[i].price, productsTech[i].image);
//   document.getElementById('products-list').appendChild(productElement);
//   i++
// }
