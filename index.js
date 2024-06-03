let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGamebtn = document.querySelector(".new_game")
let display_winner =document.querySelector(".display_winner")
let winner = document.querySelector(".winner")

display_winner.style.display = "none"

let turn_O = true;

const winingPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
    if (turn_O == true) {
        box.innerText ="O";
        turn_O=false
    }else{
        box.innerText ="X";
        turn_O = true;
    }
    box.disabled = true
    checkwinner();
 })
})

// function checkwinner(){

// }
const checkwinner = ()=>{

//MY LOGIC

//  for ( let pattern of winingPatterns) {
//     if (boxes[pattern[0]].innerText==="O" && boxes[pattern[1]].innerText ==="O" && boxes[pattern[2]].innerText === "O") {
//         alert("O is winner")
//     }else if (boxes[pattern[0]].innerText==="X" && boxes[pattern[1]].innerText ==="X" && boxes[pattern[2]].innerText === "X") {
//         alert("X is winner")
//     }
//  }

for (pattern of winingPatterns) {
    let position_0_val = boxes[pattern[0]].innerText
    let position_1_val = boxes[pattern[1]].innerText
    let position_2_val = boxes[pattern[2]].innerText

    if (position_0_val != "" && position_1_val != "" && position_2_val != "") {
        if (position_0_val == position_1_val && position_1_val == position_2_val) {
         showWinner(position_0_val)
        }
    }
}
}
const disabledBoxes = ()=>{
    for(box of boxes){
        box.disabled = true
       }
}
const enableboxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
const showWinner = (winner_type)=>{
       winner.innerText =`CONGARTULATION !! Winner is ${winner_type}`
       display_winner.style.display = "inline"
       disabledBoxes()
    }
    const Hide_display_winner = ()=>{
        display_winner.style.display = "none"
    }
const reset_game_or_new_game = ()=>{
    turn_O = true;
     enableboxes();
     Hide_display_winner()
}
resetBtn.addEventListener("click",()=>{
    reset_game_or_new_game()
})

// const newGame = ()=>{
//     turn_O =true
//     enableboxes()
//     Hide_display_winner()
// }
newGamebtn.addEventListener("click",()=>{
  reset_game_or_new_game()
})