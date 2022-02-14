let checkButton = document.querySelector(".container--check-button");
let inputGuess = document.querySelector("#container--input-guess");
let result = document.querySelector(".result");
let count = document.querySelector(".count");
let body = document.getElementById("body");
let title = document.querySelector(".title");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let image = document.querySelector(".image");

let randomNumber = Math.floor(Math.random() * 101); // 0 ile 100 arası bir sayı random ettik
console.log(randomNumber);

let closestBig = 100;
let closestLow = 0;

function findingNumber() {
  if (randomNumber == inputGuess.value) {
    checkButton.style.display = "none";
    count.style.display = "none";
    inputGuess.style.display = "none";
    title.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "block";
    result.innerText = "WINNER!!!";
    result.style.color = "yellow";
    result.style.textShadow = "13px 12px 12px black";
    result.style.fontSize = "5rem";
    body.style.background = "brown";
  } else if (inputGuess.value > randomNumber) {
    if (inputGuess.value > 100) {
      result.innerHTML = "Please Enter a number less than 100";
      inputGuess.value = ""; // inputun içini boşaltırız.
      return; // inputun içini boşalttıktan sonra kodun gerisine bakmaz.
    }
    closestBig = inputGuess.value;
    result.innerHTML = `Enter a number between ${closestLow} and ${closestBig}`;
  } else if (inputGuess.value < randomNumber) {
    if (inputGuess.value < 0) {
      result.innerHTML = "Please Enter a number bigger than 0";
      inputGuess.value = ""; // inputun içini boşaltırız.
      return; // inputun içini boşalttıktan sonra kodun gerisine bakmaz.
    }
    closestLow = inputGuess.value;
    result.innerHTML = `Enter a number between ${closestLow} and ${closestBig}`;
  } else if (inputGuess.value == "") {
    result.innerHTML = "Enter a Number";
  }
}

checkButton.addEventListener("click", findingNumber);

let counter = 5;

function myCounter() {
  counter--;
  count.innerHTML = `Number of attempts: ${counter}`;
  inputGuess.value = "";

  if (counter == 0) {
    checkButton.style.display = "none";
    count.style.display = "none";
    inputGuess.style.display = "none";
    title.style.display = "none";
    img1.style.display = "none";
    img3.style.display = "block";
    result.style.display = "none";
    body.style.background = "black";
  }
}

checkButton.addEventListener("click", myCounter);
