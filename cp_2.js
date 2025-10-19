// Define function fetchProductThen()
    // Use fetch to retrieve data
function fetchProductsThen(){
    fetch("https://www.course-api.com/javascript-store-products")
    .then((response)=>{
        return response.json();
    })
    // Log each product in console
    .then((products)=>{
        products.forEach((product)=>{
            console.log(`Product name: ${products.fields.name}`);
        });
    })
    // Use catch to fetch any error
    .catch((error)=>{
        console.error("Failed to load product data:", error);
    });
}
// Create fetchProductsAsync() function
    // Use async and try to retrieve product data
async function fetchProductsAsync(){
    const URL = "https://www.course-api.com/javascript-store-products"
    try{
        const response = await fetch(URL);
        const products = await response.json();
        // Pass results to displayProducts
        displayProducts(products);
    }catch(error){
        // Call handleError
        handleError(error);
    }
}
// Write displayProducts(products)
function displayProducts(products){
    // select the #product-container element
    const container = document.getElementById("product-container");
    // Loop through first 5 products
    for(let i=0; i<5; i++){
        // Create and append HTML elements for name, image, and price
        const product = products[i];
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <h2>${product.fields.name}</h2>
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
        <p>Price: $${product.fields.price/100}</p>
        `;
        container.appendChild(productCard);
    }
}

// Add reusable handleError(error) function:
function handleError(error){
    console.error(`An error occurred: ${error.message}`);
}

// Call both functions
fetchProductsThen();
fetchProductsAsync();
