function fetchProductsThen(){
    fetch("https://www.course-api.com/javascript-store-products")
    .then((response)=>{
        return response.json();
    })
    .then((products)=>{
        products.forEach((product)=>{
            console.log(`Product name: ${products.fields.name}`);
        });
    })
    .catch((error)=>{
        console.error("Failed to load product data:", error);
    });
}