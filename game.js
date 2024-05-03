let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector(".overall");

let turnO = true; //playerx playery
let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

//function is used to calculate the winner of the game
const checkWinner = () => {
  for (pattern of arr) {
    // console.log(
    //     pattern[0],
    //     pattern[1],
    //     pattern[2]
    // );
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val !="" && pos2val !="" &&pos3val !=""){
        if(pos1val ===pos2val &&pos2val ===pos3val ){
            console.log("winner",pos1val );
            showWinner(pos1val);
        }
    }
  }
};



//This function is used to print the winner of game.
const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    disableBox();
};

const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const resetGame = () =>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
};

newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);

