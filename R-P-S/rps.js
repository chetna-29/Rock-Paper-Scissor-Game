let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorepara = document.querySelector("#user-board").children[0];
const compscorePara = document.querySelector("#comp-board").children[0];


const gencompch=()=>{
    const op =["rock" , "paper" , "scissors"]
    const rand = Math.floor(Math.random()*3);
    return op[rand];
}
const drawgame =()=>{
    msg.innerText= "Game was draw!!..play again😑";
    msg.style.backgroundColor= "Grey";
}
const winner=(userwin, userchoice ,compch)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win🥳! ${userchoice} beats ${compch}`;
        msg.style.backgroundColor= "green";
    }
     else{
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText=`You lose🤦‍♀️! ${compch} beats ${userchoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playGame =(userchoice) => {
    console.log("userchoice = ", userchoice);
    const compch = gencompch();
    console.log("compchoice = ", compch);

    if (userchoice === compch) {
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compch === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compch === "scissors" ? false : true;
        }
        else{
            userwin = compch === "rock" ? false : true;
        }
        winner(userwin, userchoice, compch); 
    }
};

    choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
});
});
