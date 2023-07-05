
 let totalAttempts=5;
 let attempts=0;
 let totalWins=0;
 let totalLost=0;




const form=document.querySelector("form");

const cardBody=document.querySelector(".card-body");

  const guessNum=form.querySelector("#guessingnumber");

  const checkBtn=form.querySelector("#btnid");


  const resultText=cardBody.querySelector(".textgiven") ;


   const remainAttemt=cardBody.querySelector(".remaining-attemt");

   const lostwin=document.createElement("p");



   form.addEventListener("submit",(event)=>{

    event.preventDefault();
    
 

    attempts++;
    if(attempts>5){
        guessNum.disabled=true;
        checkBtn.disabled=true;


    }else{
        
        checkResult(guessNum.value);
        remainAttemt.innerHTML=`Remaining attempts:${totalAttempts-attempts}`

    }
    guessNum.value="";

   });




   function checkResult(guessNum){
    

  const myRandomNum=getRandomNum(5);

  if(guessNum==myRandomNum){
       resultText.innerHTML=`You have won`;
       totalWins++;

  }else{

   
    resultText.innerHTML=`You have lost,random number was:${myRandomNum}`;
    totalLost++;
  }
       lostwin.innerHTML=`won:${totalWins},lost:${totalLost}`;
       lostwin.classList.add("large-text");
       cardBody.appendChild(lostwin);


   };




   function getRandomNum(limit){

  return Math.floor(Math.random() * limit)+1;



   };