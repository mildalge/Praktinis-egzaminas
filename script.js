const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")
const links = document.getElementsByClassName("link")
const anchors = document.querySelectorAll("a")
const sections = document.querySelectorAll("section")



burger.addEventListener("click", function(){
    this.classList.toggle("rotateZ")
    sideNav.classList.toggle("transformX")
})

window.addEventListener("resize", function(){
    if(window.innerWidth > 600){
        burger.classList.remove("rotateZ")
        sideNav.classList.remove("transformX")
    }
})

for(var link of links){
    link.addEventListener("click", function(){

        for(var link of links){
            link.classList.remove("active")
        }
        this.classList.add("active")
    })
}

window.addEventListener("scroll", function(){
    let current
   
    for(let section of sections){
        if(window.pageYOffset >= section.offsetTop -200){
            current = section.getAttribute("id")
        }
    }

    for(let anchor of anchors){
        anchor.classList.remove("active")
        if(anchor.getAttribute("href") == "#" + current){
            anchor.classList.add("active")
        }
    }
})


// TABAI
const tabs = document.getElementsByClassName("tab")
// const h1 = document.querySelector("h1")
const buttons = document.getElementsByTagName("button")

// for (let i = 0; i < tabs.length; i++) {
//     // Paslepia visus tabus pradzioje
//     tabs[i].style.display = "none"
  
// }

tabs[0].style.display = "block"


function showTab(event, id) {
    
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
        buttons[2].classList.remove("selected")
        buttons[3].classList.remove("selected")
        buttons[4].classList.remove("selected")
    }
    
    document.getElementById(id).style.display = "block"
    
    event.currentTarget.classList.add("selected")
}


// SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // breakpoints:{
    //     1000:{
    //         slidesPerView:3
    // }
  });

