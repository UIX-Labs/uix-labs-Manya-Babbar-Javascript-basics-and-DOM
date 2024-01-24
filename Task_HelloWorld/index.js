// Print hello World
// Write your code here
console.log('hello World');

// Write your code above

//Declare a variable i and set its value to 5
// Write your code here
let i =5;

// Write your code above

//Write the if else statement to console "Number is odd" if the value of i is odd and "Number is even" if the value of i is even.
// Write your code here
if(i%2 == 0){
  console.log('Number is even');
}
else{
  console.log('Number is odd');
}

// Write your code above

//Declare a string variable which is always constant and set is value to 'triangle'.
// Write your code here
const string= "triangle";

// Write your code above

//Write a function 'findSide' which takes an argument 'type' and return the number of sides in that shape
// Write your code here
function findSide(type){
  switch(type){
    case "Triangle": 
    return 3; 
    
    case "Square": 
    return 4;

    case "Circle" :
    return Infinity;  
  }
}

// Write your code above
const side = findSide('Circle');
console.log('Side', side);