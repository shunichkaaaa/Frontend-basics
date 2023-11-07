const colored1 = document.getElementById("polytech");
const colored2 = document.querySelector(".hobby__title");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const container = document.getElementById("container");

colored1.addEventListener("click", function () {
  if (colored1.classList.contains("colored")) {
    colored1.classList.toggle("colored--another");
  } else {
    colored1.classList.add("colored");
  }
});

colored2.addEventListener("click", function () {
  if (colored2.classList.contains("colored")) {
    colored2.classList.toggle("colored--another");
  } else {
    colored2.classList.add("colored");
  }
});

addButton.addEventListener("click", function () {
  const newImage = document.createElement("img");
  newImage.classList.add("imagesToBeScaled");
  newImage.src = "img/uzhgorod-castle-painted.jpg";
  newImage.alt = "Фото Ужгородського замку намальоване";
  container.appendChild(newImage);
});

deleteButton.addEventListener("click", function () {
  const lastChild = container.lastChild;
  if (lastChild) {
    container.removeChild(lastChild);
  }
});

increaseButton.addEventListener("click", function () {
  const imagesToBeScaled = document.querySelectorAll(".imagesToBeScaled");
  imagesToBeScaled.forEach(function (image) {
    const currentWidth = image.offsetWidth;
    const currentHeight = image.offsetHeight;
    const newWidth = currentWidth * 1.1;
    const newHeight = currentHeight * 1.1;

    image.style.width = newWidth + "px";
    image.style.height = newHeight + "px";
  });
});

decreaseButton.addEventListener("click", function () {
  const imagesToBeScaled = document.querySelectorAll(".imagesToBeScaled");
  imagesToBeScaled.forEach(function (image) {
    const currentWidth = image.offsetWidth;
    const currentHeight = image.offsetHeight;
    const newWidth = currentWidth / 1.1;
    const newHeight = currentHeight / 1.1;

    image.style.width = newWidth + "px";
    image.style.height = newHeight + "px";
  });
});
