// let navList = document.getElementById('navList');
// let navMenu = document.getElementById('navMenu');
// let hamburger = document.getElementById('fa-bars');

// hamburger.addEventListener("click", () =>{
//     hamburger.classList.style('active');
//     navList.classList.toggle('active');
// })


const bars = document.querySelector('.barss');
const navList = document.querySelector('.navList');
const change = document.querySelector('.fa-bars');

change.addEventListener("click", ()  => {
    change.classList.toggle('active');
    navList.classList.toggle('active');
})
