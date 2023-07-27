const baseUrl = 'https://fakestoreapi.com/products';

function getProductData() {

    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud a la API');
            }
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
}

function displayResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    const billboardDiv = document.getElementById('billboard');    
    
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        Toastify({

            text: "No se encontraron resultados para su busqueda",
            
            duration: 3000
            
            }).showToast();

           
    } else {

        billboardDiv.innerHTML = '';
       

        results.forEach(result => {
            const productTitle = result.title;
            const productImage = result.image;
            const productPrice = result.price;

            searchResultsDiv.innerHTML += `
            <div class="card-content"> 
                <h3 class="card-title">${productTitle}</h3>
                <img class="card-image" src="${productImage}" alt="Product Image">
                <span class="product-price">${productPrice}</span>
            </div>
        `;
        searchResultsDiv.style.display = 'flex'
      
        });
    }
}


const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    getProductData(searchInput)
        .then(data => {
            const filteredData = data.filter(product => product.title.toLowerCase().includes(searchInput));
            displayResults(filteredData);
        });
});