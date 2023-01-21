
let kids = document.getElementById("kids")
kids.addEventListener(("click"),()=>{
    document.querySelector('.dropContainerwomen').classList.remove('showDivwomen');
    document.querySelector('.dropContainerMen').classList.remove('showDivMen');
    document.querySelector('.dropContainer').classList.remove('showDiv')
    console.log("Clicked")
    // showDiv();
    document.querySelector('.dropContainerKids').classList.add('showDivKids')
})

// cancel.addEventListener(("click"),()=>{
//     console.log("Cancel")
//     document.querySelector('.dropContainer').classList.remove('showDiv')
// })