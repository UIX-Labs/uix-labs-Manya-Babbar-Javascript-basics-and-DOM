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

const slamBook= document.querySelector(".allSlams");
slamBook.innerHTML=' ';
allSlamArray.forEach(entry=>{
const card=    `<div class="card">

<p>My name in your contact is <span class="answer">${entry.contactName}</span></p>

<p>Relationship between us is <span class="answer">${entry.relationship}</span></p>

<p>Something you like in me is <span class="answer">${entry.likeInMe}</span></p>

<p>Something you hate in me is <span class="answer">${entry.hateInMe}</span></p>

<p>If I die what would be your reaction?</p>

<p><span class="answer">${entry.deadReaction}</span></p>

<p>What did you feel when you first saw me?</p>

<p><span class="answer">${entry.firstImpression}</span></p>

<p>A beautiful message for me?</p>

<p><span class="answer">${entry.beautifulMessage}</span></p>

<p>A nickname for me is <span class="answer">${entry.nickname}</span></p>

<p>A song you want to dedicate to me is <span class="answer">${entry.songForMe}</span></p>

<p>Can I share your opinion in my status?</p>

<p><span class="answer">${entry.shareOpinion}</span></p>

</div>`

slamBook.innerHTML+= card;
});
// Write your code above this line
}