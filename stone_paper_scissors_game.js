let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  // console.log(Math.random() * 3);
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("Game was draw");
  msg.innerText = "Game was draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  // console.log(userWin);

  if (userWin == true) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You Lose.");
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  // console.log("User Choice", userChoice);
  //modular way of fun building=>Generate comp choice
  const compChoice = genCompChoice();
  // console.log("Computer choice", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "scissors") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");
    // console.log(userChoice, " is clicked");
    playGame(userChoice);
  });
});
