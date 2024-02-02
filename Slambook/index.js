let form;
let allSlamArray=[];
//Write code below to select the form element
form= document.querySelector("form");
// Write your code above
console.log(form,"form");

// Add the evenlistner below
form.addEventListener("submit", function(event){
     event.preventDefault(); 
    console.log("I am inside submit.");
});
//Write your code above

function showSlamList(){
//Update the function here
let contactName= document.getElementsByName('contactName');
let relationship= document.getElementsByName('relationship');
let likeInMe= document.getElementsByName(' likeInMe');
let hateInMe= document.getElementsByName('hateInMe');
let deadReaction= document.getElementsByName('deadReaction');
let firstImpression= document.getElementsByName('firstImpression');
let beautifulMessage= document.getElementsByName('beautifulMessage');
let nickname= document.getElementsByName('nickname');
let songForMe= document.getElementsByName('songForMe');
let shareOpinion= document.getElementsByName('shareOpinion');

console.log(contactName,relationship, likeInMe, hateInMe,deadReaction,firstImpression,beautifulMessage,nickname,songForMe,shareOpinion);
// Write your code above this line
}

showSlamList();