//declare variables
let currentDisc = 0;
let stackA = [3, 2, 1]
let stackB = []
let stackC = []
const disc1 = 1
const disc2 = 2
const disc3 = 3

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
}

//add disc to end of array and remove it from currentDisc (simulates dropping disc onto stack)
const addDisc = (stack) => {
  stack.push(currentDisc)
  currentDisc = 0;
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

//pull through buttons from HTML file
const buttonStackA = document.querySelector(".stackA__button")
const buttonStackB = document.querySelector(".stackB__button")
const buttonStackC = document.querySelector(".stackC__button")

//event listeners
buttonStackA.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackA)) {
      removeDisc(stackA);
      console.log(stackA);
      console.log(currentDisc);
    }
  } else {
    if (compareDiscWithStack(stackA)) {
      addDisc(stackA)
      console.log(stackA);
      console.log(currentDisc); 
    }
  }
})

buttonStackB.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackB)) {
      removeDisc(stackB);
      console.log(stackB);
      console.log(currentDisc);
    }
  } else {
    if (compareDiscWithStack(stackB)) {
      addDisc(stackB)
      console.log(stackB);
      console.log(currentDisc); 
    }
  }
})

buttonStackC.addEventListener("click", () => {
  if (!isCurrentDisc()) {
    if (compareStack(stackC)) {
      removeDisc(stackC);
      console.log(stackC);
      console.log(currentDisc);
    }
  } else {
    if (compareDiscWithStack(stackC)) {
      addDisc(stackC)
      console.log(stackC);
      console.log(currentDisc); 
    }
  }
})

