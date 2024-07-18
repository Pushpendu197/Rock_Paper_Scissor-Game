//ASSUME ALL THE INITIAL SCORE IS 0
let userscore = 0;
let compscore = 0;
let drawscore = 0;
let totalscore = 0;

//TARGET ALL THE RESPECTED CLASSES AND ID USING QUERY_SELECTOR DOM 
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");
const drawpara = document.querySelector("#draw-score");
const totalpara = document.querySelector("#total-score");



//SHOW COMPUTER CHOICE 
const computerchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randidex = Math.floor(Math.random() * 3); //generate number between 2 (n-1) range 
    return option[randidex];
}

//SHOW DRAW 
const draw = () => {
    drawscore++;
    drawpara.innerText = drawscore;

    console.log("Draw game ");
    msg.innerText = "Game Draw Play Again!!";
    msg.style.backgroundColor = "blue";
};


//SHOW WINNER [BETWEEN USER AND COMP]
const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userpara.innerText = userscore; // update or increment the value of user 1

        console.log("User_Win");
        msg.innerText = `You Win!! Your Choice ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        comppara.innerText = compscore; // update or increment the value of computer 1

        console.log("User_loose");
        msg.innerText = `You Loose!! Computer Choice ${compchoice} Beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}



// Generate the choice of User and Computer
const playgame = (userchoice) => {
    console.log("User Choice ", userchoice);
    //generate compute choice 
    const compchoice = computerchoice();
    console.log("comp choice ", compchoice);



    //Check Win_loose_Draw!!
    if (userchoice === compchoice) {
        //draw game 
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            // scissor paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }

        showWinner(userwin, userchoice, compchoice);
    }

};



//Select the choice on clicking stone paper and scissor .............Show user choice

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        totalscore++;
        totalpara.innerText = totalscore //increment the value of total click by 1

        playgame(userchoice);
    });
});