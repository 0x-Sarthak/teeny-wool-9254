let right = document.querySelector(".right");


fetch("http://localhost:3000/users")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    showCart(data);
})

function showCart(data){
    if(data === undefined){
        data = [];
    }
    data.forEach(function(element, index){
        let cart = document.createElement("div");
        cart.className = "cart";
        let image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", element.image);
        let title = document.createElement("h5")
        title.className = "title";
        title.innerText = element.title;
        let category = document.createElement("p");
        let catAndSize = document.createElement("div");
        catAndSize.className = "catAndSize"
        category.className = "category";
        category.innerText = element.category;
        let size = document.createElement("p");
        size.className = "size";
        size.innerText = `size ${element.size}`
        catAndSize.append(category, size);
        let price = document.createElement("p");
        price.className = "price";
        price.innerText = `$ ${element.price}`;
        let addDiv = document.createElement("div");
        addDiv.className = "addDiv";
        let addToCart = document.createElement("button");
        addToCart.className = "addToCart";
        addToCart.innerText = "Add To Cart";
        addDiv.append(price, addToCart);
        cart.append(image,title,catAndSize,addDiv);
        right.append(cart);

    })
}