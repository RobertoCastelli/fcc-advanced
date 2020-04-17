// GLOBAL VARIABLES
let btnShow = document.getElementById("btnShow");
let solution = document.getElementById("solution");
let clack = document.getElementById("clack");
let zip = document.getElementById("zip");
let list = document.querySelectorAll("#list-view");

// TOGGLE CODE DISPLAY
btnShow.addEventListener("click", () => {
  if (btnShow.innerHTML == "SHOW CODE") {
    solution.style.display = "block";
    btnShow.innerHTML = "HIDE CODE";
    zip.play();
  } else {
    solution.style.display = "none";
    btnShow.innerHTML = "SHOW CODE";
  }
});

// SPINNER LOADER
let interval;
function spinner() {
  let spinner = document.getElementById("spinner");

  interval = setInterval(() => {
    if ((spinner.innerText += ">").length >= 6) spinner.innerText = "";
  }, 500);
}

//---------------------//
//-----ALOGORYTHMS-----//
//---------------------//

// PALINDROME
let btnPalindrome = document.getElementById("btn-palindrome");
let strPalindrome = document.getElementById("input-palindrome");
let result = document.getElementById("result-palindrome");

function palindrome(str) {
  str = str.toLowerCase().replace(/\W|_/g, "").split("");
  let reverseStr = str.slice().reverse();
  return reverseStr.join("") === str.join("");
}

btnPalindrome.addEventListener("click", (e) => {
  e.preventDefault();
  let strPalindromeValue = strPalindrome.value;
  result.innerText = "";
  spinner.innerText = "";
  spinner();
  setTimeout(() => {
    let resultPalindrome = palindrome(strPalindromeValue);
    result.innerText = resultPalindrome;
    clearInterval(interval);
  }, 3000);
});
