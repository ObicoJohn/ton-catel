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

let farmingAmount = 0;
let hours = 4;
let minutes = 0;
let seconds = 0;
let farmingTimer, countdownTimer;
// function to start farming
function startFarming() {
    document.querySelector("#farmingBtn").disabled = true; //disable the button
    // show the image,timer, and amount after the button is clicked

    document.querySelector("#farmingImg").style.display = "inline";
    document.querySelector(".timer").style.display = "inline";
    // document.getElementById("amount").style.display = "inline";
    document.getElementById("farmingText").textContent = "Farming";
    // update amount every second during farming
    // farmingTimer = setInterval(() => {
    //     farmingAmount += 1000;   //increment the amount
    //     document.getElementById("amount").innerText = farmingAmount;
    // }, 1000);
    //start countdown
    startCountdown();
}
function startCountdown() {
    let countdownTimer = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(countdownTimer);
            clearInterval(farmingTimer);
            document.querySelector("#farmingBtn").disabled = false; //enable the button after farming ends
            document.getElementById("farmingBtn").textContent = "Claim";
            document.querySelector(".timer").style.display = "none";
        } else {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                seconds = 59;
                minutes--;
            } else if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            }
            //update yje countdown text
            document.getElementById("timer").innerText = `0${hours
                }: ${minutes < 10 ? '0' : ''}${minutes} :${seconds < 10 ? '0' : ''} ${seconds}`;
        }
    }, 1000);
}