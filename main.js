//declare variables
let currentDisc;
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
// if (!isCurrentDisc()) {
//   console.log("It works!");
// }

//remove last item from array (simulates removing disc from stack)
const removeDisc = (stack) => {
  stack.pop();
}

//add disc to end of array (simulates dropping disc onto stack)
const addDisc = (stack) => {
  stack.push(currentDisc)
}

//check if last element of array is smaller than the 2nd to last element (to see if you can pick it up/drop it)
const compareDiscs = (stack) => {
  if (stack[stack.length-1] < stack[stack.length-2]) {
    return true;
  } else {
    return false;
  }
}
