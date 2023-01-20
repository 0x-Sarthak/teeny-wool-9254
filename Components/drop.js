
let gift = document.getElementById("gifts")
gift.addEventListener(("click"),()=>{
    document.querySelector('.dropContainerwomen').classList.remove('showDivwomen');
    document.querySelector('.dropContainerMen').classList.remove('showDivMen');
    document.querySelector('.dropContainerKids').classList.remove('showDivKids')
    
    document.querySelector('.dropContainer').classList.add('showDiv')
})

// cancel.addEventListener(("click"),()=>{
//     console.log("Cancel")
//     document.querySelector('.dropContainer').classList.remove('showDiv')
// })