let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".rpc");
const msg = document.querySelector("#msg");

const userCount = document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score");
const genCompChoice = ()=>
{
    const options =["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random()*3);

    return options[randIndx];
};
const draw = ()=>
{
    msg.innerText = "Game was draw,play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, choiceId , cmpChoice)=>
{
    if(userWin)
    {
        userScore++;
        userCount.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You win! your ${choiceId} beats ${cmpChoice}.`
      
        
    }
    else
    {
       compScore++;
       compCount.innerText = compScore;
       msg.style.backgroundColor = "red";
       msg.innerText = `You lose! ${cmpChoice} beats  your ${choiceId}.`
       
    }
}

const playGame =(choiceId)=>
{
    console.log("User choice = ",choiceId);

    const cmpChoice = genCompChoice();

    console.log("Computer choice = ",cmpChoice);

    if(choiceId===cmpChoice)
    {
        draw();
    }
    else 
    {
        let userWin = true;
        if(choiceId === "rock")
        {
            userWin = cmpChoice==="scissor"?true: false;
        }
        else if(choiceId === "paper")
        {
            userWin = cmpChoice==="rock"?true: false;
        }
        else
        {
            userWin = cmpChoice==="paper"?true: false;
        }

        showWinner(userWin,choiceId,cmpChoice);
    }

};

choices.forEach((rpc) => 
{
    rpc.addEventListener("click",()=>
    {
       const choiceId = rpc.getAttribute("id");
      
       playGame(choiceId);

       
    });
});