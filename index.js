import {Product, ProductsList, generateId} from './scripts/products.js'
let FavoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
let CartList = JSON.parse(localStorage.getItem('cart')) || [];

let productMostSellOne = new Product(generateId(), 'PS5', 'God Of War - Ragnarok', 2500, './img/mostSell/Untitled-1.png', '', true);
ProductsList.push(productMostSellOne);
let productMostSellTwo = new Product(generateId(), 'Nintendo Switch', 'Bayonetta 3', 2125, './img/mostSell/Untitled-2.png', '', true);
ProductsList.push(productMostSellTwo);
let productMostSellThree = new Product(generateId(), 'Xbox One', 'Fifa 23', 2500, './img/mostSell/Untitled-4.png', '', true);
ProductsList.push(productMostSellThree);
let productMostSellFour = new Product(generateId(), 'PS4', 'NBA 2K23', 1225, './img/mostSell/Untitled-5.png', '', true);
ProductsList.push(productMostSellFour);

console.log(ProductsList)


const mostSell = document.getElementById('mostSell');

FavoritesList.forEach((favorite) => {
  const productIndex = ProductsList.findIndex((product) => product.id === favorite.id);
  if (productIndex !== -1) {
    ProductsList[productIndex].isFavorite = true;
  }
});

const mostSellProducts = ProductsList.filter((product) => product.mostSell);


mostSellProducts.forEach((el, index) => {
  const productCard = document.createElement('div');
  productCard.classList.add('card-content');
  productCard.innerHTML = `
    <img class="card-image" src="${el.url}" alt="">                     
    <h4 class="card-title">${el.title}</h4>                                    
    <ul class="card-list">
      <li class="version">${el.category}</li>
      <li class="price">$${el.price}</li>
      <li><a class="btn btn-primary" id="addCartButton">Comprar <i class="bi bi-bag-plus-fill"></i></a></li>
      <li><a class="btn btn-warning" id="favButton-${index + 1}">Favoritos <i class="bi bi-star-fill"></i></a></li>
      </li>
      <li><a class="more" href="">Ver mas opciones</a></li>
    </ul>
  `;

  mostSell.appendChild(productCard);

  const favButton = productCard.querySelector(`#favButton-${index + 1}`);
  favButton.addEventListener("click", () => {
    if (!el.isFavorite) {
      FavoritesList.push(el);
      el.isFavorite = true;
      localStorage.setItem("favorites", JSON.stringify(FavoritesList));
      Toastify({

        text: "Producto agregado a Favoritos",

        duration: 3000,

        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },

      }).showToast();
    } else {
      Toastify({

        text: "El producto ya se encuentra en Favoritos",

        duration: 3000

      }).showToast();
    }

  });

  const addCartButton = productCard.querySelector('#addCartButton');
  addCartButton.addEventListener("click", () => {
    CartList.push(el);
    localStorage.setItem("cart", JSON.stringify(CartList));
    Toastify({

      text: "Producto agregado al Carrito",

      duration: 3000,

      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },

    }).showToast();
  });
});












