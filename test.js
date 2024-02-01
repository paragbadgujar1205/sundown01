

// --------------------------------for smooth scrolling--------------------------------------
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// ------------------------------------for toggel navigation--------------------------------------
var icon = document.getElementById("icon")
var sidenav = document.getElementById("side-nav")
var check = 0

icon.addEventListener("click",function(){
    if(check == 0)
    {
        sidenav.style.display = "block"
        icon.className = "fa-solid fa-xmark"
        check = 1
    }else{
        sidenav.style.display = "none"
        icon.className = "fa-solid fa-bars"
        check = 0
    }
})


// ---------------------------------------for fixed div and ele animation--------------------------
var mainC = document.querySelector("#eleC")
var box = document.querySelector("#fixed-box")

mainC.addEventListener("mouseenter", function(){
    box.style.display = "block"
})
mainC.addEventListener("mouseleave", function(){
    box.style.display = "none"
})

var elements = document.querySelectorAll(".ele");
console.log(elements)


console.log(box)

elements.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var img = e.getAttribute("data-img")
        box.style.backgroundImage = `url(${img})`
    })
})
box.addEventListener("mouseenter", function(){
    box.style.display = "block"
})

// ------------------------------------------for slider-------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

// --------------------------------------------end----------------------------------------------------------

