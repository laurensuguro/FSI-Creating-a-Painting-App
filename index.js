let selectedColor = "blue";

let painting = document.querySelector(".painting");
painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = selectedColor;
});

let colorChoices = document.querySelectorAll(".color-choice");

for (let i = 0; i < colorChoices.length; i++) {
  colorChoices[i].addEventListener("click", function () {
    selectedColor = colorChoices[i].id;
  });
}

painting.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = "white";
});

let pixel = document.querySelectorAll(".pixel");
