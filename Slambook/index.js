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
    showSlamList();
});
//Write your code above

function showSlamList(){
//Update the function here
let contactName= document.getElementsByName('contactName');
let relationship= document.getElementsByName('relationship');
let likeInMe= document.getElementsByName('likeInMe');
let hateInMe= document.getElementsByName('hateInMe');
let deadReaction= document.getElementsByName('deadReaction');
let firstImpression= document.getElementsByName('firstImpression');
let beautifulMessage= document.getElementsByName('beautifulMessage');
let nickname= document.getElementsByName('nickname');
let songForMe= document.getElementsByName('songForMe');
let shareOpinion= document.getElementsByName('shareOpinion');

let inputNames= [contactName, relationship, likeInMe, hateInMe, deadReaction, firstImpression, beautifulMessage, nickname, songForMe, shareOpinion];

let contactNameValue= document.querySelector(`input[name = 'contactName']`).value;
let relationshipValue= document.querySelector(`[name = 'relationship']`).value;
let likeInMeValue= document.querySelector(`[name = 'likeInMe']`).value;
let hateInMeValue= document.querySelector(`[name= 'hateInMe']`).value;
let deadReactionValue= document.querySelector(`[name= 'deadReaction']`).value;
let firstImpressionValue= document.querySelector(`[name='firstImpression']`).value;
let beautifulMessageValue= document.querySelector(`[name='beautifulMessage']`).value;
let nicknameValue= document.querySelector(`[name='nickname']`).value;
let songForMeValue= document.querySelector(`[name='songForMe']`).value; 
let shareOpinionValue= document.querySelector(`[name='shareOpinion']`).value;

let formValues= {
    contactName: contactNameValue,
    relationship: relationshipValue,
    likeInMe: likeInMeValue,
    hateInMe: hateInMeValue,
    deadReaction: deadReactionValue,
    firstImpression: firstImpressionValue,
    beautifulMessage: beautifulMessageValue,
    nickname: nicknameValue,
    songForMe: songForMeValue,
    shareOpinion: shareOpinionValue,
};

inputNames.forEach(inputList =>{
    inputValue= inputList[0].value;

if (inputValue.trim()===""){
    inputList.forEach(element=>{
        element.style.borderBottom= '2px solid red';
        var errorSpan= document.createElement("span");
        errorSpan.textContent= " Error:-The text is required."
        errorSpan.style.color= 'red';
        element.after(errorSpan);
    });
    return;
}
});
allSlamArray.push(formValues);
console.log(allSlamArray);
// Write your code above this line
}