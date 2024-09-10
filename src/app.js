/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function card() {
    let icon1 = document.querySelector("#icon1");
    let bothIcons = (icon1.innerHTML = randomIcon());
    let icon = document.querySelector("#icon2");
    icon.innerHTML = bothIcons;
    let number1 = document.querySelector("#myNumber");
    number1.innerHTML = randomNumber();
  }
  card();
  let time = 10;
  let timer = setInterval(() => {
    document.getElementById("countdown").innerText = time;
    time--;
    if (time < 0) {
      card();
      time = 10;
    }
  }, 1000);
};

function randomNumber() {
  let number1 = Math.floor(Math.random() * 13) + 1;
  if (number1 === 11) {
    return "J";
  } else if (number1 === 12) {
    return "Q";
  } else if (number1 === 13) {
    return "K";
  } else if (number1 === 1) {
    return "A";
  }
  let number2 = number1;
  return number2;
}

function randomIcon() {
  let icons = Math.floor(Math.random() * 4);
  let arricons = ["♠", "♥", "♦", "♣"];
  if (icons === 1 || icons === 2) {
    document.getElementById("icon1").classList.add("red");
    document.getElementById("icon2").classList.add("red");
  }

  icons = arricons[icons];
  return icons;
}
