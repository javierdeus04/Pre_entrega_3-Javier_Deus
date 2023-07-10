document.addEventListener('DOMContentLoaded', () => {

    const carrito = document.querySelector("#carrito")
    const finalizePurchaseButton = document.querySelector("#finalizePurchaseButton");
    let CartList = JSON.parse(localStorage.getItem('cart')) || [];

    CartList.forEach((el, index) => {
        const listElement = document.createElement("li");
        listElement.classList.add("listElement");
        listElement.innerHTML = `
            <div class="listContent"> 
                <div class="product">
                    <img src="../${el.url}">            
                </div>
                <h3>${el.title} - ${el.category}</h3>
                <span>$${el.price}</span>
                <div class="links">
                    <a href="" id="deleteButton-${index}">Eliminar</a>
                </div>
            </div>
        `;
        carrito.appendChild(listElement);

        const deleteButton = listElement.querySelector(`#deleteButton-${index}`);
        deleteButton.addEventListener("click", () => {
            CartList.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(CartList));
            listElement.remove();
            document.addEventListener('DOMContentLoaded', () => {

    const carrito = document.querySelector("#carrito")
    let CartList = JSON.parse(localStorage.getItem('cart')) || [];

    CartList.forEach((el, index) => {
        const listElement = document.createElement("li");
        listElement.classList.add("listElement");
        listElement.innerHTML = `
            <div class="listContent">
                <div class="product">
                    <img src="../${el.url}">          
                </div>
                <h3>${el.title} - ${el.category}</h3>
                <span>$${el.price}</span>
                <div class="links">
                    <a href="" id="deleteButton-${index}">Eliminar</a>
                </div>
            </div>
        `;
        carrito.appendChild(listElement);


        const deleteButton = listElement.querySelector(`#deleteButton-${index}`);
        deleteButton.addEventListener("click", () => {
            CartList.splice(index, 1); 
            localStorage.setItem("cart", JSON.stringify(CartList));            
            listElement.remove();
            Toastify({

                text: "Producto eliminado del carrito",
                
                duration: 3000
                
                }).showToast();      
        });
      
        
    });
    noCartMessage.style.display = CartList.length === 0 ? "block" : "none";
})
        
        });


    });
    finalizePurchaseButton.style.display = CartList.length > 0 ? "block" : "none";
    noCartMessage.style.display = CartList.length === 0 ? "block" : "none";
})