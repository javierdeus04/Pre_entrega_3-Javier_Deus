document.addEventListener('DOMContentLoaded', () => {

    const favoritos = document.querySelector("#favoritos")
    let FavoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
    let CartList = JSON.parse(localStorage.getItem('cart')) || [];


    FavoritesList.forEach((el, index) => {
        const listElement = document.createElement("li");
        listElement.classList.add("listElement");
        listElement.innerHTML = `
            <div class="listContent"> 
                <div class="product">
                    <img src="../${el.url}">            
                </div>
                <h3>${el.title} - ${el.category}</h3>
                <div class="links">
                    <a href="">Mas detalles</a>
                    <button class="btn addCartButton" id="addCartButton">Agregar al carrito</button>
                    <a href="" id="deleteButton-${index}">Eliminar</a>
                </div>
            </div>
        `;
        favoritos.appendChild(listElement);

        const deleteButton = listElement.querySelector(`#deleteButton-${index}`);
        deleteButton.addEventListener("click", () => {
            FavoritesList.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(FavoritesList));
            listElement.remove();
            Toastify({

                text: "Producto eliminado de Favorios",

                duration: 3000

            }).showToast();
        });

        const addCartButton = listElement.querySelector('.addCartButton');
        addCartButton.addEventListener("click", () => {
            CartList.push(el);
            localStorage.setItem("cart", JSON.stringify(CartList));
            FavoritesList.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(FavoritesList));
            listElement.remove();

            Toastify({

                text: "Producto agregado al Carrito",

                duration: 3000,

                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },

            }).showToast();

        });
    });
    noFavoritesMessage.style.display = FavoritesList.length === 0 ? "block" : "none";
})




