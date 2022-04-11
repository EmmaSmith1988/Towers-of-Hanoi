//declare variables
let currentDisc = 0;
let stackA = [3, 2, 1]
let stackB = []
let stackC = []
const disc1 = 1
const disc2 = 2
const disc3 = 3
let moves = 0;

//pull through buttons from HTML file
const buttonStackA = document.querySelector(".stackA__button")
const buttonStackB = document.querySelector(".stackB__button")
const buttonStackC = document.querySelector(".stackC__button")
const buttons = document.querySelectorAll(".button")
const blocks = document.querySelectorAll(".block")
const currentMoves = document.querySelector(".scores__current")
const win = document.querySelector(".scores__win")
const numberOfDiscs = document.querySelector("#discs")
const fewestMoves = document.querySelector(".scores__fewest")
const reset = document.querySelector(".reset")

//starting positions defined
blocks[0].style.cssText = "display: block";
blocks[1].style.cssText = "display: block";
blocks[2].style.cssText = "display: block";

//functions

//check if there is something already stored in currentDisc
const isCurrentDisc = () => {
  if (currentDisc) {
    return true
  } else if (!currentDisc) {
    return false
  }
}

//remove last item from array and adds it to currentDisc (simulates removing disc from stack)
const removeDisc = (stack) => {
  currentDisc = stack.pop();
  console.log(currentDisc);
  console.log(stack);
  switch (stack) {
    case stackA:
      blocks[currentDisc-1].style.cssText = "display: none";
      blocks[currentDisc+5].style.cssText = "display: block";
      break;
    case stackB:
      blocks[currentDisc+11].style.cssText = "display: none";
      blocks[currentDisc+5].style.cssText = "display: block";
      break;
    case stackC:
      blocks[currentDisc+17].style.cssText = "display: none";
      blocks[currentDisc+5].style.cssText = "display: block";
  }
}

//add disc to end of array and remove it from currentDisc (simulates dropping disc onto stack)
const addDisc = (stack) => {
  stack.push(currentDisc)
  currentDisc = 0;
  moves += 1;
  currentMoves.innerHTML = `Current moves: ${moves}`
}

//check if last element of array is smaller than the 2nd to last element (to see if you can pick it up)
const compareStack = (stack) => {
  if (stack[stack.length-1] < stack[stack.length-2] || stack.length == 1) {
    return true;
  } else {
    return false;
  }
}

//check if currentDisc is smaller than the last item in the array (to see if you can drop it)
const compareDiscWithStack = (stack) => {
  if (currentDisc < stack[stack.length-1] || stack.length == 0) {
    switch (stack) {
      case stackA:
        blocks[currentDisc-1].style.cssText = "display: block";
        blocks[currentDisc+5].style.cssText = "display: none";
        break;
      case stackB:
        blocks[currentDisc+11].style.cssText = "display: block";
        blocks[currentDisc+5].style.cssText = "display: none";
        break;
      case stackC:
        blocks[currentDisc+17].style.cssText = "display: block";
        blocks[currentDisc+5].style.cssText = "display: none";
        break;
    }
    return true;
  }
}

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     if (!isCurrentDisc()) {
//       if (compareStack(button.id)) {
//         removeDisc(button.id);
//         console.log(button.id);
//         console.log(currentDisc);
//       }
//     } else {
//       if (compareDiscWithStack(button.id)) {
//         addDisc(button.id)
//         console.log(button.id);
//         console.log(currentDisc); 
//       }
//     }
//   })
// })

const setStartingDiscs = () => {
  switch (numberOfDiscs.value) {
    case '3':
      blocks[0].style.cssText = "display: block";
      blocks[1].style.cssText = "display: block";
      blocks[2].style.cssText = "display: block";
      blocks[3].style.cssText = "display: none";
      blocks[4].style.cssText = "display: none";
      blocks[5].style.cssText = "display: none";
      fewestMoves.innerHTML = `Fewest possible moves: ${((2**(numberOfDiscs.value))-1)}`
      stackA = [3, 2, 1]
      break;
    case '4': 
      blocks[0].style.cssText = "display: block";
      blocks[1].style.cssText = "display: block";
      blocks[2].style.cssText = "display: block";
      blocks[3].style.cssText = "display: block";
      blocks[4].style.cssText = "display: none";
      blocks[5].style.cssText = "display: none";
      fewestMoves.innerHTML = `Fewest possible moves: ${((2**(numberOfDiscs.value))-1)}`
      stackA = [4, 3, 2, 1]
      break;
    case '5': 
      blocks[0].style.cssText = "display: block";
      blocks[1].style.cssText = "display: block";
      blocks[2].style.cssText = "display: block";
      blocks[3].style.cssText = "display: block";
      blocks[4].style.cssText = "display: block";
      blocks[5].style.cssText = "display: none";
      fewestMoves.innerHTML = `Fewest possible moves: ${((2**(numberOfDiscs.value))-1)}`
      stackA = [5, 4, 3, 2, 1]
      break;
    case '6':
      blocks[0].style.cssText = "display: block";
      blocks[1].style.cssText = "display: block";
      blocks[2].style.cssText = "display: block"; 
      blocks[3].style.cssText = "display: block";
      blocks[4].style.cssText = "display: block";
      blocks[5].style.cssText = "display: block";
      fewestMoves.innerHTML = `Fewest possible moves: ${((2**(numberOfDiscs.value))-1)}`
      stackA = [6, 5, 4, 3, 2, 1]
      break;
  }
}

//event listeners
const resetGame = () => {
  blocks.forEach(block => {
    block.style.cssText = "display: none";
  })
  setStartingDiscs();
  stackB = [];
  stackC = [];
  currentDisc = 0;
  win.innerHTML = "";
  moves = 0;
  currentMoves.innerHTML = `Current moves: ${moves}`
}

reset.addEventListener('click', resetGame)

numberOfDiscs.addEventListener("change", resetGame)

buttonStackA.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackA)) {
      removeDisc(stackA);
    }
  } else {
    if (compareDiscWithStack(stackA)) {
      addDisc(stackA);
    }
  }
})

buttonStackB.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackB)) {
      removeDisc(stackB);
    }
  } else {
    if (compareDiscWithStack(stackB)) {
      addDisc(stackB)
    }
  }
})

buttonStackC.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackC)) {
      removeDisc(stackC);
    }
  } else {
    if (compareDiscWithStack(stackC)) {
      addDisc(stackC)
    }
  }
  if (stackC.length == numberOfDiscs.value) {
    win.innerHTML = `Congratulations, you won in ${moves} moves!!!`;
  } else {
    return;
  }
})

