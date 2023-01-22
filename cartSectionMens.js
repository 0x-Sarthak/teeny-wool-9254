const activeUrl = 'http://localhost:3000/users?_limit=100&_page=2'
const designerUrl = 'http://localhost:3000/users?_limit=50&_page=5'

let right = document.querySelector(".right");
let designer = document.getElementById("designer");
let active = document.getElementById("active");
let jeans = document.getElementById("jeans");
let shirt = document.getElementById("shirt");
let jackets = document.getElementById("jackets"); 
let filterbySize = document.getElementById("size");
let min = document.getElementById("min");
let max = document.getElementById("max");
let priceBtm = document.getElementById("searchImagePrice");

let cardData = JSON.parse(localStorage.getItem("cart"))||[];

let jData = [];
let jeansData = [];
jeans.addEventListener(("click"),()=>{
    if(jData === undefined){
       jData = [];
    }
    jData.forEach(function(element){
        if(element.category === "Jeans"){ 
            jeansData.push(element);
        }
    })
    // console.log(jeansData)
    showCart(jeansData);
})

let filterData = [];
filterbySize.addEventListener("change",function(){
    console.log(filterbySize)
    right.innerHTML = null;
    let jeansFiltered = filterData.filter((element)=>{
        if(element.size === filterbySize.value){
            return true;
        }else{
            return false;
        }
       
    });
    console.log(filterbySize.value)
    console.log(jeansFiltered)
    showCart(jeansFiltered)
    
})

let sData = [];
let shirtsData = [];
shirt.addEventListener(("click"),()=>{
    if(sData === undefined){
       sData = [];
    }
    sData.forEach(function(element){
        if(element.category === "Shirts"){
            shirtsData.push(element);
        }
    })
    // console.log(shirtsData)
    showCart(shirtsData);
})

let jacData = [];
let jacketsData = [];
jackets.addEventListener(("click"),()=>{
    if(jacData === undefined){
       jacData = [];
    }
    jacData.forEach(function(element){
        if(element.category === "Jacket"){
            jacketsData.push(element);
        }
    })
    // console.log(jacketsData)
    showCart(jacketsData);
})

active.addEventListener(("click"),()=>{
    fetch(activeUrl)
    .then((res)=>{
        return res.json();
    })
    .then((activeData)=>{
        showCart(activeData);

    })
})

designer.addEventListener(("click"),()=>{
    fetch(designerUrl)
    .then((res)=>{
        return res.json();
    })
    .then((desData)=>{
        showCart(desData)
    })
})

let priceData = [];
let filterPrice = [];
priceBtm.addEventListener(("click"),()=>{
    priceData.forEach(function(element, index){
        if(element.price >= min.value && element.price <= max.value){
            filterPrice.push(element)
        }
    })
    showCart(filterPrice);
})

fetch("http://localhost:3000/users")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    // console.log(data);
    jData = data;
    sData = data;
    jacData = data;
    filterData = data;
    priceData = data;
    showCart(data);
})

function showCart(data){
    right.innerHTML = null;
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
        title.innerText = element.title.substring(0,27);
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
        
        addToCart.addEventListener(("click"),()=>{
            cardData.push(element);
            localStorage.setItem("cart", JSON.stringify(cardData));
        })
        
        addDiv.append(price, addToCart);
        cart.append(image,title,catAndSize,addDiv);
        right.append(cart);

    })
}