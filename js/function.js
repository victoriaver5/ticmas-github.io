const  Menu = document.querySelector(".menu");
const openmenuBtn = document.querySelector(".open-menu");
const closemenuBtn = document.querySelector(".close-menu");

function toggleMenu (){
    Menu.classList.toggle("menu_opened")
}

openmenuBtn.addEventListener("click", toggleMenu);
closemenuBtn.addEventListener("click",toggleMenu);

const menuLinks= document.querySelectorAll(".menu a[href ^= '#']");

const observer= new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       const id = entry.target.getAttribute("id");
       const menuLink = document.querySelector('.menu a[href="#${id}"]')

       if (entry.isIntersecting){
        document.querySelector(".menu a.selected").classList.remove("selected")
        menuLink.classList.add("selected")
       } 
    });
},
    {rootMargin:"-40% 0px -70% 0px"}
);

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click",function(){
        Menu.classList.remove("menu_opened");
    })

    const hash = menuLinks.getAttribute("href");
    const target = document.querySelector (hash);
    if (target){
        observer.observe(target);
    }
})