let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".main-nav");

function handleClick() {
  toggle.classList.toggle("open");
  navigation.classList.toggle("show");
}

toggle.addEventListener("click", handleClick);

let dropToggle = document.querySelectorAll(".drop-menu");
let dropMenu = document.querySelector(".drop");

function dropMenuFunction(e) {
  e.target.classList.toggle("droped");
}

dropToggle.forEach((drop) => drop.addEventListener("click", dropMenuFunction));

window.onclick = function (e) {
  if (!e.target.matches(".drop-menu")) {
    var dropdowns = document.getElementsByClassName(".drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("droped")) {
        openDropdown.classList.remove("droped");
      }
    }
  }
};
