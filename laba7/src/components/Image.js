import castle from "../assets/uzhgorod-castle.jpg";
import castlePainted from "../assets/uzhgorod-castle-painted.jpg";

export default function Image() {
  function Add() {
    const container = document.getElementById("container-castle-painted");
    const newImage = document.createElement("img");
    newImage.classList.add("castle-painted");
    newImage.src = castlePainted;
    newImage.alt = "Фото Ужгородського замку намальоване";
    container.appendChild(newImage);
  }

  function Delete() {
    const container = document.getElementById("container-castle-painted");
    const lastChild = container.lastChild;
    if (lastChild) {
      container.removeChild(lastChild);
    }
  }

  function Increase() {
    const imagesToBeScaled = document.querySelectorAll(".castle-painted");
    imagesToBeScaled.forEach(function (image) {
      const currentWidth = image.offsetWidth;
      const currentHeight = image.offsetHeight;
      const newWidth = currentWidth * 1.1;
      const newHeight = currentHeight * 1.1;

      image.style.width = newWidth + "px";
      image.style.height = newHeight + "px";
    });
  }

  function Decrease() {
    const imagesToBeScaled = document.querySelectorAll(".castle-painted");
    imagesToBeScaled.forEach(function (image) {
      const currentWidth = image.offsetWidth;
      const currentHeight = image.offsetHeight;
      const newWidth = currentWidth / 1.1;
      const newHeight = currentHeight / 1.1;

      image.style.width = newWidth + "px";
      image.style.height = newHeight + "px";
    });
  }

  return (
    <div>
      <a href="https://tourinform.org.ua/uzhhorod">
        <img id="castle" src={castle} alt="Фото Ужгородського замку" />
      </a>
      <br />
      <div className="action_with_image">
        <div>
          <button id="addButton" onClick={Add}>
            Додати
          </button>
          <button id="increaseButton" onClick={Increase}>
            Збільшити
          </button>
          <button id="decreaseButton" onClick={Decrease}>
            Зменшити
          </button>
          <button id="deleteButton" onClick={Delete}>
            Видалити
          </button>
        </div>
        <div id="container-castle-painted"></div>
      </div>
    </div>
  );
}
