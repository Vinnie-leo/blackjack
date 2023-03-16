gameActive = false;

//---------------cards--------------//
const drawnCardDealer = document.querySelectorAll(".empty-card-dealer");
const drawnCardPlayer = document.querySelectorAll(".empty-card-player");
const dealerCardDisp = document.querySelectorAll(".empty-card-dealer > p");
const playerCardDisp = document.querySelectorAll(".empty-card-player > p");
const startEL = document.querySelector(".start");
const randomCard = Math.floor(Math.random() * 12);

//----------------bet--------------//
const betAmnt = document.querySelector(".bet");
let playerBalance = document.querySelector(".account-balance > .userBalance");



startEL.addEventListener("click",startGame);

function getBet(){
    //get players bet amount//
    playerBet = betAmnt.value;
    
    //deduct current bet from players balance//
    let updatedBalance =(playerBalance.innerHTML - playerBet);
    playerBalance.innerHTML = updatedBalance;
    
}





function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 12);


}



function startGame(){
   gameActive = true;
   getBet();

   let randomCard = '';
   console.log(randomCard);

   drawnCardDealer[0].style.background = "white";
   dealerCardDisp[0].innerHTML = "X";
   
   drawnCardDealer[1].style.background= "white";
   dealerCardDisp[1].innerHTML = Math.floor(Math.random() * 11) + 1;
    

   drawnCardPlayer[0].style.background = "white";
   drawnCardPlayer[0].innerHTML = Math.floor(Math.random() * 11) + 1;
   

   drawnCardPlayer[1].style.background= "white";
   drawnCardPlayer[1].innerHTML = Math.floor(Math.random() * 11) + 1;

   
    
}

if(gameActive === true){

}