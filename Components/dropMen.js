
let men = document.getElementById("men")
men.addEventListener(("click"),()=>{
    document.querySelector('.dropContainerwomen').classList.remove('showDivwomen');
    document.querySelector('.dropContainerKids').classList.remove('showDivKids');
    document.querySelector('.dropContainer').classList.remove('showDiv')
    console.log("Clicked")
    // showDiv();
    document.querySelector('.dropContainerMen').classList.add('showDivMen')
})

// cancel.addEventListener(("click"),()=>{
//     console.log("Cancel")
//     document.querySelector('.dropContainer').classList.remove('showDiv')
// })