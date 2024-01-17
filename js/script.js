function criarproduct(nome, preco, imagem) {
  var div = document.createElement('div');
  div.className = 'flex flex-col items-center justify-center bg-white p-6 shadow-xl rounded-md text-center';

  var titulo = document.createElement('h1');
  titulo.className = 'text-gray-800 text-md font-bold mt-2';
  titulo.textContent = nome;

  var precoElement = document.createElement('p');
  precoElement.className = 'text-gray-500 text-md';
  precoElement.textContent = '$' + preco;

  var imagemElement = document.createElement('img');
  imagemElement.src = imagem;
  imagemElement.className = 'rounded-md border-2 border-gray-100 p-1 rounded-md shadow-lg';

  var botao = document.createElement('button');
  botao.className = 'bg-blue-800 text-sm text-white px-4 py-2 m-1 rounded-md shadow-lg hover:bg-blue-700';
  botao.textContent = 'COMPRAR';

  div.appendChild(imagemElement);
  div.appendChild(titulo);
  div.appendChild(precoElement);
  div.appendChild(botao);


  return div;
}

var productsTech = [
  { nome: 'Smartphone', preco: 699.99, imagem: 'https://source.unsplash.com/featured/250x200?smarthphone' },
  { nome: 'PC Gamer', preco: 1499.99, imagem: 'https://source.unsplash.com/featured/250x200?computer' },
  { nome: 'Fone de Ouvido Bluetooth', preco: 129.99, imagem: 'https://source.unsplash.com/featured/250x200?headphone' },
  { nome: 'Mouse', preco: 129.99, imagem: 'https://source.unsplash.com/featured/250x200?mouse' },
  { nome: 'Teclado', preco: 129.99, imagem: 'https://source.unsplash.com/featured/250x200?keyboard' },
  { nome: 'Joystick', preco: 129.99, imagem: 'https://source.unsplash.com/featured/250x200?joystick' },
  { nome: 'Ração para ovos', preco: 129.99, imagem: 'https://source.unsplash.com/featured/250x200?ração' },
  { nome: 'Café', preco: 129.99, imagem: 'https://source.unsplash.com/featured/250x200?cafe' }
];


//Sort functions
function orderProductsByPriceAsc(products) {
  const sortedProducts = products.map((product) => product).sort((a, b) => a.preco - b.preco);
    return sortedProducts;
}

function orderProductsByPriceDesc(products) {
  const sortedProducts = products.map((product) => product).sort((a, b) => b.preco - a.preco);
    return sortedProducts;
}

// forEach
orderProductsByPriceDesc(productsTech).forEach((product) => {
  var productElement = criarproduct(product.nome.toUpperCase(), product.preco, product.imagem);

  document.getElementById('products-list').appendChild(productElement);
})

// Classic For
for(i = 0; i <= productsTech.length - 1; i++) {
  let productElement = criarproduct(productsTech[i].nome.toUpperCase(), productsTech[i].preco, productsTech[i].imagem);

  document.getElementById('products-list').appendChild(productElement);
};

//While
i = 0
while(i <= productsTech.length - 1) {
  let productElement = criarproduct(productsTech[i].nome.toUpperCase(), productsTech[i].preco, productsTech[i].imagem);
  document.getElementById('products-list').appendChild(productElement);
  i++
}
