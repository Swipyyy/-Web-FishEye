function fetchData() {
  fetch("./data/FishEyeData.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.photographers
        .map((user) => {
          return `<div class="user">
          <div class="user--profile">
            <div class="link">
              <div class="userImg">
                <img
                  class="userImg__mimi"
                  src="../img/Photographers ID Photos/${user.portrait}"
                  alt="MimiKeel"
                />
              </div>
              <div class="user__name">
                <h2>${user.name}</h2>
              </div>
            </div>
          </div>
          <div class="user--description">
            <h3 class="user__city">${user.country}</h3>
            <p class="user__citation">${user.tagline}</p>
            <p class="user__price">${user.price}€/jour</p>
          </div>
          <div class="user--tag">
            <button class="navigation__tag">${user.tags}</button>
          </div>
        </div>`;
        })
        .join("");
      document
        .querySelector("#insertUsers")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
