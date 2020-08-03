var mainPuzzle = []
var boxesClickable = false

const colors = ["red", "green", "blue", "yellow"]

function start(level=1){
  let puzzle = []
  //disable start button
  document.getElementById("start").setAttribute("disabled",true)

  //randomize
  for(let i=0; i<level+2;i++){
    puzzle.push(colors[getRndInteger(0,3)])
  }

  animateColors(puzzle)
}

function animateColors(puzzle,index=0){
  if(index>puzzle.length-1){
    return endAnimate(puzzle)
  }
  let color = puzzle[index]
  let elem = document.getElementById(color)
  elem.className = "simon-button animate"
  setTimeout(()=>{
    elem.className = "simon-button"
    animateColors(puzzle, index+1)
  },1500)
}

function endAnimate(puzzle){
  mainPuzzle = puzzle
  boxesClickable = true
}

function clickBox(color){
  if(boxesClickable){
    console.log(mainPuzzle)
    if(mainPuzzle[0] === color){
      //maybe play success sound
      mainPuzzle.shift()
      if(mainPuzzle.length === 0){
        win()
      }
    }else{
      lose()
    }
  }else{
    return
  }
}

function win(){
  var mainPuzzle = null
  var boxesClickable = false
  alert("Start Next Level")
  start(2)
}

function lose(){
  console.log("Lose")
  var mainPuzzle = null
  var boxesClickable = false
  document.getElementById("start").removeAttribute("disabled");
}
//Utilities
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}