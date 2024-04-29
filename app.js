var homeOne = document.querySelector("#home-one")
let homeTwo = document.querySelector("#home-two")
let homeThree = document.querySelector("#home-three")
let homeFour = document.querySelector("#home-four")

// Home One page

homeOne.addEventListener("click", function () {
    window.location.href = "index.html" ;
});

// Home Two page

homeTwo.addEventListener("click", function () {
    window.location.href = "home2.html" ;
});

// Home Three page

homeThree.addEventListener("click", function () {
    window.location.href = "home3.html";
});

// Home Four page

homeFour.addEventListener("click", function () {
    window.location.href = "home4.html";
});