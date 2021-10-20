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
  listOfPhotographers.forEach((photographers) => {
    document.querySelector("#insertUsers").insertAdjacentHTML(
      "afterbegin",
      `<div class="user" id="user${photographers.id}">
      <div class="user--profile">
        <a class="link" id="${photographers.id}" href="test.html?id=${photographers.id}"">
          <div class="userImg">
            <img
              class="userImg__img"
              src="../img/Photographers ID Photos/${photographers.portrait}"
              alt="${photographers.name}"
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
      document
        .querySelector("#tag" + idNow)
        .insertAdjacentHTML(
          "afterbegin",
          `<button class="navigation__tag" href="index.html?=coucou" id="${element}">#${element}</button>`
        );
    });
  });
}
export { loadData };
