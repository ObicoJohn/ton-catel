// $(window).on('load', function () {
//     $(".preloader").fadeOut(300);
//     $(".home-container").fadeIn(300);
// });
// loading script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".home-container").style.display = "block";
    document.querySelector(".home-container").style.opacity = "1";
});
//farming button

function changeText() {
    const button = document.querySelector("#btn");
    btn.innerHTML = "Farming";
}