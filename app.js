const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const finalResult = document.querySelector("#result");

checkButton.addEventListener("click", () => clickHandler())

function clickHandler(){
  birthdayInNumber = Number(dateOfBirth.value.slice(0,4) + dateOfBirth.value.slice(5,7) + dateOfBirth.value.slice(8,10));
  x = birthdayInNumber;
  y = 0;
  while(x!=0){
  y = y+ x%10;
  x = Math.trunc(x/10);
  }
  if(y% luckyNumber.value == 0){
    finalResult.innerText = "Yayyy! its a lucky number :)";
  }
  else{
    finalResult.innerText = luckyNumber.value + " is not that lucky :(";
  }
}