const containerCards = document.querySelector(".container__cards");

function fetchData() {
  const promise = new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  promise
    .then((data) => {
      const userData = data.results[0];
      const user = new User(
        userData.picture,
        userData.cell,
        userData.location.city,
        userData.location.postcode,
        userData.email
      );
      user.createUserCard();
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
}

function removeAllData() {
  while (containerCards.firstChild) containerCards.removeChild(containerCards.firstChild);
}

function removeLastData() {
  containerCards.removeChild(containerCards.lastChild);
}

class User {
  constructor(picture, cell, city, postcode, email) {
    this.picture = picture;
    this.cell = cell;
    this.city = city;
    this.postcode = postcode;
    this.email = email;
  }

  createUserCard() {
    const card = document.createElement("div");
    containerCards.appendChild(card);
    card.className = "card";
    const userInfo = document.createElement("div");
    card.appendChild(userInfo);
    userInfo.innerHTML = `
    <div class="user-photo">
    <img src="${this.picture.large}" alt="User photo">
    </div>
    <div class="user-description">
    <p>Cell: ${this.cell}</p>
    <p>City: ${this.city}</p>
    <p>Postcode: ${this.postcode}</p>
    <p>Email: ${this.email}</p>
    </div>
    `;
  }
}
