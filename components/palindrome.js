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
