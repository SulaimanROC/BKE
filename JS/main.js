//first time visit
const newUser = window.localStorage.getItem("newUser"); //gets from local storage
const visitedPlayerOne = window.localStorage.getItem("playerOne"); //gets from local storage
const nameBoard = document.querySelector('.points');
let playerOneName = '';
let playerTwoName = '';

const visitedPlayerTwo = window.localStorage.getItem("playerTwo");//gets from local storage
if (newUser == undefined) {  //checks if the user is undefined (never visited)
	// new visit setup
	window.localStorage.setItem("newUser", 1); 
	alert("Welcome to tic-tac-toe!");
	playerOneName = prompt("Player 1: ");
	playerTwoName = prompt("Player 2: ");
	// save player names to local storage
	window.localStorage.setItem("playerOne", playerOneName);
	window.localStorage.setItem("playerTwo", playerTwoName);

	location.reload();
}



//turning from x to o after every move
const areas = document.querySelectorAll('.area'); // takes ALL the squares
let playerSymbol = "x" // player's symbol
let whoPlays = document.querySelector(".turns"); // takes player text bos of who is playing
window.localStorage.getItem("playerTwo");// gets player name
window.localStorage.getItem("playerOne");
playerTwoName = visitedPlayerTwo // puts the local storage names as player names
playerOneName = visitedPlayerOne
whoPlays.textContent = "its " + playerOneName + "'s turn!";

nameBoard.innerHTML = `
Score board
</br> Player one: ${playerOneName}
</br> Player two: ${playerTwoName}
`


for (let index = 0; index < areas.length; index++) { //counts areas
	const square = areas[index]; //square is area[number]
	square.addEventListener("click", function() {
		if (square.textContent === "") { // if square content = empty then it will put player symbol with the line of code under
			square.textContent = playerSymbol;
		}
		if (playerSymbol === "x") { // checks player symbol
			whoPlays.textContent = playerOneName + " is playing!"; // if its x it says this
			playerSymbol = "o"; // changes to o
			winConditions() // checks win condition
		} else {
			whoPlays.textContent = playerTwoName + " is playing!";
			playerSymbol = "x";
			winConditions()
		}
	});
}

// empty's all the areas
function restart(){
  localStorage.clear();
  location.reload()
//   areas.forEach(a => {
//     a.textContent = '';
//   });
}
//restart button
const resetButton = document.querySelector(".restart");
resetButton.addEventListener("click", restart)


// win conditions X
function winConditions(){
  if (areas[0].textContent =="x" && areas[1].textContent =="x" && areas[2].textContent =="x") {
    whoPlays.textContent = playerOneName + " won!"
	restart()
  } 
  else if (areas[3].textContent =="x" && areas[4].textContent =="x" && areas[5].textContent =="x"){
      whoPlays.textContent = playerOneName + " won!"
	  restart()
  } 
  else if (areas[6].textContent =="x" && areas[7].textContent =="x" && areas[8].textContent =="x"){
      whoPlays.textContent = playerOneName + " won!"
	  restart()
  } 
  else if (areas[0].textContent =="x" && areas[3].textContent =="x" && areas[6].textContent =="x"){
      whoPlays.textContent = playerOneName + " won!"
	  restart()
  }
  else if (areas[1].textContent =="x" && areas[4].textContent =="x" && areas[7].textContent =="x"){
      whoPlays.textContent = playerOneName + " won!"
	  restart()
  } 
  else if (areas[2].textContent =="x" && areas[5].textContent =="x" && areas[8].textContent =="x"){
      whoPlays.textContent = playerOneName + " won!"
	  restart()
  } 
  else if (areas[0].textContent =="x" && areas[4].textContent =="x" && areas[8].textContent =="x"){
      whoPlays.textContent = playerOneName + " won!"
	  restart()
  } 
  else if (areas[2].textContent =="x" && areas[4].textContent =="x" && areas[6].textContent =="x"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
    // o win conditions
  }
  else if (areas[0].textContent =="o" && areas[1].textContent =="o" && areas[2].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[3].textContent =="o" && areas[4].textContent =="o" && areas[5].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[6].textContent =="o" && areas[7].textContent =="o" && areas[8].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[0].textContent =="o" && areas[3].textContent =="o" && areas[6].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[1].textContent =="o" && areas[4].textContent =="o" && areas[7].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[2].textContent =="o" && areas[5].textContent =="o" && areas[8].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[0].textContent =="o" && areas[4].textContent =="o" && areas[8].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()
  }
  else if (areas[2].textContent =="o" && areas[4].textContent =="o" && areas[6].textContent =="o"){
      whoPlays.textContent = playerTwoName + " won!"
	  restart()

  }
}
