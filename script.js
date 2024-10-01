// $(window).on('load', function () {
//     $(".preloader").fadeOut(300);
//     $(".home-container").fadeIn(300);
// });
// loading script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
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
    document.querySelector("#level-speed").style.display = "inline";
    document.querySelector("#amount").style.display = "inline";
    document.querySelector(".farming-box").style.display = "flex";
    document.querySelector(".timer").style.display = "inline";
    // document.getElementById("amount").style.display = "inline";
    document.getElementById("farmingText").textContent = "Farming";
    // update amount every second during farming
    farmingTimer = setInterval(() => {
        farmingAmount += 0.1042;   //increment the amount
        farmingAmount = parseFloat(farmingAmount.toFixed(3)); //Ensure no more than 3 decimal place
        document.getElementById("amount").innerText = farmingAmount;
    }, 1000);
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

// toggle btw active and complete mission
function completebtn() {
    document.getElementById("activeTasks").style.display = "none";
    document.getElementById("opt").style.textDecoration = "underline";
    document.getElementById("opt1").style.textDecoration = "none";
    document.getElementById("completedTasks").style.display = "block";
}

function activebtn() {
    document.getElementById("activeTasks").style.display = "block";
    document.getElementById("opt").style.textDecoration = "none";
    document.getElementById("opt1").style.textDecoration = "underline";
    document.getElementById("completedTasks").style.display = "none";
}

// mission complete button
let currentTaskElement; //store the current task element

// function to start the task
function startTask(button) {
    button.style.display = 'none'; //hide the start button
    const verifyButton = button.nextElementSibling;
    verifyButton.style.display = 'inline-block'; //show the verify button
}

// function to open the verification modal
function openModal(button) {
    currentTaskElement = button.parentElement.parentElement.parentElement;
    // store the task element
    document.getElementById('verifyModal').style.display = 'flex'; //show the modal
}
// function to close the modal
function closeModal() {
    document.getElementById('verifyModal').style.display = 'none'; //hide the modal
}

// function to complete a task
function completeTask() {
    // Move the task from active to completed
    const completedTasks = document.getElementById('completedTasks');
    const missionBox = document.querySelector(".mission-boxes");
    completedTasks.appendChild(currentTaskElement);
    // remove the start and verify buttons from the task
    currentTaskElement.querySelector('.start-btn').remove();
    currentTaskElement.querySelector('.verify-btn1').remove();
    // add a completed class to the task
    currentTaskElement.classList.add('completed');
    closeModal(); // close the modal
}

// for level requirements

const levelRequirements = {
    3: { coins: 0, invites: 0, requiredCoins: 40000, requiredInvites: 2 },
    5: { coins: 0, invites: 0, requiredCoins: 80000, requiredInvites: 5 },
    7: { coins: 0, invites: 0, requiredCoins: 150000, requiredInvites: 10 },
    9: { coins: 0, invites: 0, requiredCoins: 400000, requiredInvites: 15 },
};

// function to update the UI for a specific level
function updateLevelUI(level) {
    const coins = levelRequirements[level].coins;
    const invites = levelRequirements[level].invites;
    const requiredCoins = levelRequirements[level].requiredCoins;
    const requiredInvites = levelRequirements[level].requiredInvites;

    // update coin display
    document.getElementById(`coins-${level}`).textContent = coins;
    document.getElementById(`invites-${level}`).textContent = invites;

    //check if coin requirement is met
    const coinCheckbox = document.getElementById(`checkbox-coins-${level}`);
    if (coins >= requiredCoins) {
        coinCheckbox.checked = true;
        coinCheckbox.disabled = false;
    } else {
        coinCheckbox.checked = false;
        coinCheckbox.disabled = true;
    }

    // to check if the reguired amount of invites is met
    const inviteCheckbox = document.getElementById(`checkbox-invites-${level}`);
    if (invites >= requiredInvites) {
        inviteCheckbox.checked = true;
        inviteCheckbox.disabled = false;
    } else {
        inviteCheckbox.checked = false;
        inviteCheckbox.disabled = true;
    };
}

// // Simulate addding a coin to a specific level
// function addCoin(level) {
//     if (levelRequirements[level].coins < levelRequirements[level].requiredCoins) {
//         levelRequirements[level].coins++;
//         updateLevelUI(level);
//     }
// }

// // Simulate addding an invite to a specific level

// function addInvite(level) {
//     if (levelRequirements[level].invites < levelRequirements[level].requiredInvites) {
//         levelRequirements[level].invites++;
//         updateLevelUI(level);
//     }
// }

// Initialize the UI for all levels
Object.keys(levelRequirements).forEach(level => {
    updateLevelUI(level);
});