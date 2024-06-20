let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newGamebtn=document.querySelector("#new-button");
let msg=document.querySelector("#msg");
let msgcontainer =document.querySelector(".msg-container");

let turn0 = true;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button has clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = "true";
    checkWinner();
  });
});

  const resetgame=() =>{
    turn0=true;
    msgcontainer.classList.add("hide");
    enableboxes();

  }

  const disabledboxes = () =>{
    for(let box of boxes){
      box.disabled=true;
     
    }}

    const enableboxes = () =>{
      for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        
      }

  }

    const showWinner=(winner)=>{
        msg.innerText=`Conguratulations , Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disabledboxes();
    }

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if(pos1value!="" && pos2value !="" && pos3value!=""){
        if(pos1value === pos2value && pos2value === pos3value){
            console.log("winner",pos1value);
            showWinner(pos1value);
        }
    }
  }
};

resetbtn.addEventListener("click",resetgame);
newGamebtn.addEventListener("click",resetgame);



