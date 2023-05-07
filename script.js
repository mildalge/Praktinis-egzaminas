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


// swiper
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
    //     600:{
    //         slidesPerView:1
    // }
  });