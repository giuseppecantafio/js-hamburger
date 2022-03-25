let hamburger = document.querySelector(".header-right > a");

let hamburgerClose = document.querySelector(".hamburger-menu > .close");

console.log(hamburger, hamburgerClose);

hamburger.addEventListener("click", function(){
    let hamburgerExpand = document.querySelector(".hamburger-menu");
    hamburgerExpand.style.display = "block";
});

hamburgerClose.addEventListener("click", function(){
    let hamburgerExpand = document.querySelector(".hamburger-menu");
    hamburgerExpand.style.display = "none";
});