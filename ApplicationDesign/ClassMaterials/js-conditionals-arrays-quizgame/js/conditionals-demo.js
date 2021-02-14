console.log("Conditionals Demo!!");

const playResponse = prompt("Would you like to play a game?");

if (playResponse.toLowerCase() === "yes") {
    alert("Great - let's play!");

    const speedResponse = prompt("In the 1994 movie Speed, what is the minimum speed the bus must go to prevent the bomb from exploding?");
    if (speedResponse === "50") {
        alert("Correct!");
    } else if (speedResponse === "40" || speedResponse === "60") {
        alert("Almost!");
    } else {
        alert("Wrong!");
    }
} else {
    alert("Oh okay, maybe next time...");
}

const playerScore = 3;
if (playerScore > 2) {
    alert("New HighScore!");
}