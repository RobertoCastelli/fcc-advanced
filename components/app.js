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
