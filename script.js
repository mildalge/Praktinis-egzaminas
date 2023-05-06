const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")
const links = document.getElementsByClassName("link")

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