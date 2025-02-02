let userscore = 0;
let compuscore = 0;

// Access the elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

// Create a variable to store the user's choice
let userChoice = '';
const msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#compu-score");

// Function to generate the computer's random choice
const gencompuchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

// Function for a draw game
const drawgame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "black";
};

// Function for a win
const winGame = () => {
    console.log("You win this round!");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    userscore++;
    userscorepara.innerText = userscore; // Update user score on the page
    console.log("User score:", userscore);
};

// Function for a lose
const loseGame = () => {
    console.log("Computer wins this round!");
    msg.innerText = "You Lost";
    msg.style.backgroundColor = "red";
    compuscore++;
    compscorepara.innerText = compuscore; // Update computer score on the page
    console.log("Computer score:", compuscore);
};

// Function to play the game
const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    
    // Generate the computer's choice using the modular function
    const computchoice = gencompuchoice();
    console.log("Computer choice =", computchoice);

    // Display choices in the console or interface as needed
    // Check for a draw
    if (userchoice === computchoice) {
        drawgame();
    }
    // Check for win/lose conditions
    else if (
        (userchoice === 'rock' && computchoice === 'scissor') ||
        (userchoice === 'paper' && computchoice === 'rock') ||
        (userchoice === 'scissor' && computchoice === 'paper')
    ) {
        winGame();
    } else {
        loseGame();
    }
};

// Assign values to userChoice when each option is clicked
rock.addEventListener('click', function() {
    userChoice = 'rock';
    console.log('User chose:', userChoice);
    playgame(userChoice); // Call the playgame function with the user's choice
});

paper.addEventListener('click', function() {
    userChoice = 'paper';
    console.log('User chose:', userChoice);
    playgame(userChoice); // Call the playgame function with the user's choice
});

scissor.addEventListener('click', function() {
    userChoice = 'scissor';
    console.log('User chose:', userChoice);
    playgame(userChoice); // Call the playgame function with the user's choice
});
















