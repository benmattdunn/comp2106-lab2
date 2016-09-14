//rock paper lizzards

var userChoice = prompt("Do you choose rock, paper or lizzard?");
if ((userChoice == "rock") || (userChoice == "paper") || userChoice == "lizzard") {
    var randomNum = Math.random()
    if (randomNum > .33) {
        console.log("computer has chosen rock");
            if (userChoice == "rock") {console.log("Draw");}
            if (userChoice == "paper") {console.log("you win!");}
            if (userChoice == "lizzards") {console.log("you lose...");}
    }
    else if (randomNum >= .34 && randomNum <= .66) {
        console.log("computer has chosen paper");
            if (userChoice == "rock") {console.log("you lose...");}
            if (userChoice == "paper") {console.log("Draw");}
            if (userChoice == "lizzards") {console.log("you win!"); }
    } else {
        console.log("computer has chosen a wonderful lizzard");
            if (userChoice == "rock") {console.log("you lose...");}
            if (userChoice == "paper") {console.log("you win!");}
            if (userChoice == "lizzards") {console.log("Draw");}
    }
    
    

}
else {
    console.log("you did not pick a valid option");
}