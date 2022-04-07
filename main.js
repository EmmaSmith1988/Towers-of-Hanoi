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
const blockA1 = document.querySelector(".stackA__block1")
const blockA2 = document.querySelector(".stackA__block2")
const blockA3 = document.querySelector(".stackA__block3")
const blockB1 = document.querySelector(".stackB__block1")
const blockB2 = document.querySelector(".stackB__block2")
const blockB3 = document.querySelector(".stackB__block3")
const blockC1 = document.querySelector(".stackC__block1")
const blockC2 = document.querySelector(".stackC__block2")
const blockC3 = document.querySelector(".stackC__block3")
const currentMoves = document.querySelector(".scores__current")
const win = document.querySelector(".scores__win")

//starting positions defined
blocks[3].style.cssText = "display: block";
blocks[4].style.cssText = "display: block";
blocks[5].style.cssText = "display: block";
console.log(blocks);
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
  moves += 1;
  currentMoves.innerHTML = `Current moves: ${moves}`
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

//event listeners
buttonStackA.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackA)) {
      removeDisc(stackA);
      blocks[currentDisc+2].style.cssText = "display: none";
      blocks[currentDisc+5].style.cssText = "display: block";
    }
  } else {
    if (compareDiscWithStack(stackA)) {
      blocks[currentDisc+2].style.cssText = "display: block";
      blocks[currentDisc+5].style.cssText = "display: none";
      addDisc(stackA);
    }
  }
})

buttonStackB.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackB)) {
      removeDisc(stackB);
      blocks[currentDisc+8].style.cssText = "display: none";
      blocks[currentDisc+5].style.cssText = "display: block";
    }
  } else {
    if (compareDiscWithStack(stackB)) {
      blocks[currentDisc+8].style.cssText = "display: block";
      blocks[currentDisc+5].style.cssText = "display: none";
      addDisc(stackB)
    }
  }
})

buttonStackC.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackC)) {
      removeDisc(stackC);
      blocks[currentDisc+14].style.cssText = "display: none";
      blocks[currentDisc+5].style.cssText = "display: block";
    }
  } else {
    if (compareDiscWithStack(stackC)) {
      blocks[currentDisc+14].style.cssText = "display: block";
      blocks[currentDisc+5].style.cssText = "display: none";
      addDisc(stackC)
    }
  }
  if (stackC == '3,2,1') {
    win.innerHTML = `Congratulations, you won in ${moves} moves!!!`;
  } else {
    return;
  }
})

