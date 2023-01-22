let addData = JSON.parse(localStorage.getItem("cart"));
let container = document.getElementById("mainContainer")
let container1 = document.getElementById("container1")
let span = document.getElementById("span");
let myCart = document.getElementById("mycart");
let Girlimg=document.getElementById("girlimg")

Girlimg.addEventListener("click",()=>{
    document.querySelector('.mainContainer').classList.remove('showCart')
    
})


myCart.addEventListener(("click"),()=>{
  document.querySelector('.mainContainer').classList.add('showCart')
//   console.log("clicked it")
})

console.log(addData)
showCart(addData);

function showCart(addData){
    span.innerText = addData.length;
    container1.innerHTML = null;
    if(addData == undefined){
        addData = [];
    }
    addData.forEach((element, index)=>{
        let childDiv = document.createElement("div");
        childDiv.className = "add_childDiv";
        let firstChild = document.createElement("div");
        firstChild.className = "add_firstChild"
        let secondChild = document.createElement("div");
        secondChild.className = "add_secondChild";
        let imageName = document.createElement("div");
        imageName.className = "add_imageName"
        let image = document.createElement("img");
        image.className = "add_image";
        image.setAttribute("src", element.image)
        let name = document.createElement("h4");
        name.className = "add_name";
        name.innerText = element.title.substring(0,17);
        imageName.append(image, name);
        let remove = document.createElement("div");
        remove.className = "add_remove";
        remove.innerText = "Remove";

        remove.addEventListener(("click"),()=>{
            addData.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(addData));
            showCart(addData)
        })
        firstChild.append(imageName, remove);
        let mrpDiv = document.createElement("div");
        mrpDiv.className = "add_mrpDiv";
        let quantity = document.createElement("p");
        quantity.className = "add_quantity";
        quantity.innerText = element.size;
        let mrp = document.createElement("p");
        mrp.className = "add_mrp";
        mrp.innerText = "$";
    
        let price = document.createElement("p");
        price.className = "add_price";
        price.innerText = element.price;
    
        mrpDiv.append(quantity, mrp,price);
    
        let symboleDiv = document.createElement("div");
        symboleDiv.className = "add_symboleDiv";
        let minus = document.createElement("p");
        minus.className = "add_minus";
        minus.innerText = "-";
        minus.addEventListener(("click"),()=>{
           
            if(num.innerText > 1){
                num.innerText = num.innerText-1;
            }
        })
        let num = document.createElement("p");
        num.className = "add_num";
        num.innerText = "1";
        let plus = document.createElement("p");
        plus.className = "add_plus";
        plus.innerText = "+";
        plus.addEventListener(("click"),()=>{
            num.innerText = +num.innerText+1;
        })
        symboleDiv.append(minus, num, plus);
    
        secondChild.append(mrpDiv, symboleDiv);
        childDiv.append(firstChild, secondChild);
        container1.append(childDiv);
        // container.append(container1);
    })
    // showCart();
}
