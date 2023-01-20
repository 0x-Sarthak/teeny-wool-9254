
let women = document.getElementById("women")
women.addEventListener(("click"),()=>{
    document.querySelector('.dropContainer').classList.remove('showDiv');
    document.querySelector('.dropContainerMen').classList.remove('showDivMen');
    document.querySelector('.dropContainerKids').classList.remove('showDivKids');
    // console.log("Clicked")
    // showDiv();
    document.querySelector('.dropContainerwomen').classList.add('showDivwomen')
})

// cancel.addEventListener(("click"),()=>{
//     console.log("Cancel")
    // document.querySelector('.dropContainer').classList.remove('showDiv')
// })