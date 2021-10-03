const checkbox = document.querySelector("#checkbox");
const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");

checkbox.addEventListener("change", () => {
  const change = document.body.classList.toggle("dark");
  if (change) {
    sunIcon.style.color = "rgb(66, 66, 66)";
    moonIcon.style.color = "rgb(245, 232, 118)";
  } else {
    sunIcon.style.color = "rgb(245, 232, 118)";
    moonIcon.style.color = "rgb(124, 124, 124)";
  }
});
