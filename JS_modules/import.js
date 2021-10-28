async function loadData(myRequest, listOfPhotographers, utilisateur) {
  const response = await fetch(myRequest);
  const importer = await response.json();
  for (let p of importer.photographers) {
    listOfPhotographers.push(
      new utilisateur(
        p.name,
        p.id,
        p.city,
        p.country,
        p.tagline,
        p.price,
        p.portrait,
        p.tags
      )
    );
  }
  let userUrl = window.location.search;
  const urlParams = new URLSearchParams(userUrl);
  let tagUser = urlParams.get("tag");

  if (tagUser === null) {
    listOfPhotographers.forEach((photographers) => {
      document.querySelector("#insertUsers").insertAdjacentHTML(
        "afterbegin",
        `<div class="user" id="user${photographers.id}">
            <div class="user--profile" aria-label="${photographers.name}">
              <a class="link" id="${photographers.id}" href="./user.html?id=${photographers.id}">
                <div class="userImg">
                  <img
                    class="userImg__img"
                    src="./img/Photographers ID Photos/${photographers.portrait}"
                    alt=""
                  />
                </div>
                <div class="user__name">
                  <h2>${photographers.name}</h2>
                </div>
              </a>
            </div>
            <div class="user--description">
              <h3 class="user__city">${photographers.country}</h3>
              <p class="user__citation">${photographers.tagline}</p>
              <p class="user__price">${photographers.price}€/jour</p>
            </div>
            <div class="user--tag" id=tag${photographers.id}>
            </div>
      </div>`
      );
      let idNow = photographers.id;
      photographers.tags.forEach((element) => {
        document.
          querySelector("#tag" + idNow).
          insertAdjacentHTML(
            "afterbegin",
            `<a class="navigation__tag" href="./index.html?tag=${element}"><span aria-label="tag">#${element}</span</a>`
          );
      });
    });
  } else {
    let filterArray = [];
    document.querySelector("#insertUsers").innerHTML = "";
    listOfPhotographers.forEach((elt) => {
      let search = elt.tags;
      if (search.find((element) =>
        element == tagUser)) {
        filterArray.push(elt.id);
      }
    });
    listOfPhotographers.forEach((photographers) => {
      if (filterArray.includes(photographers.id)) {
        document.querySelector("#insertUsers").insertAdjacentHTML(
          "afterbegin",
          `<div class="user" id="user${photographers.id}">
        <div class="user--profile" aria-label="${photographers.name}">
          <a class="link" id="${photographers.id}" href="./user.html?id=${photographers.id}">
            <div class="userImg">
              <img
                class="userImg__img"
                src="./img/Photographers ID Photos/${photographers.portrait}"
                alt=""
              />
            </div>
            <div class="user__name">
              <h2>${photographers.name}</h2>
            </div>
          </a>
        </div>
        <div class="user--description">
          <h3 class="user__city">${photographers.country}</h3>
          <p class="user__citation">${photographers.tagline}</p>
          <p class="user__price">${photographers.price}€/jour</p>
        </div>
        <div class="user--tag" id=tag${photographers.id}>
        </div>
  </div>`
        );
        let idNow = photographers.id;
        photographers.tags.forEach((element) => {
          document.
            querySelector("#tag" + idNow).
            insertAdjacentHTML(
              "afterbegin",
              `<a class="navigation__tag" href="./index.html?tag=${element}"><span aria-label="tag">#${element}</span</a>`
            );
        });
      }
    });
  }
}
export { loadData };
