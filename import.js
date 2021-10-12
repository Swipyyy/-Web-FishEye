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
          `<button class="navigation__tag" id="${element}">#${element}</button>`
        );
    });
  });
  return console.log("ok");
}
export { loadData };

// // CREATE MAIN PAGE WITH FETCH (JSON)
// function fetchData() {
//   fetch(myRequest)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error("ERROR");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const html = data.photographers // SEARCH DATA ON JSON
//         .map((user) => {
//           // RETURN AND INJECT JTML
//           return `<div class="user" id="user${user.id}">
//           <div class="user--profile">
//             <a class="link" id="${user.id}" href="test.html?id=${user.id}"">
//               <div class="userImg">
//                 <img
//                   class="userImg__img"
//                   src="../img/Photographers ID Photos/${user.portrait}"
//                   alt="${user.name}"
//                 />
//               </div>
//               <div class="user__name">
//                 <h2>${user.name}</h2>
//               </div>
//             </a>
//           </div>
//           <div class="user--description">
//             <h3 class="user__city">${user.country}</h3>
//             <p class="user__citation">${user.tagline}</p>
//             <p class="user__price">${user.price}€/jour</p>
//           </div>
//           <div class="user--tag" id=tag${user.id}>
//           </div>
//     </div>`;
//         })
//         .join("");
//       document
//         .querySelector("#insertUsers")
//         .insertAdjacentHTML("afterbegin", html);
//       return data;
//     })
//     .then((data) => {
//       const html = data.photographers
//         .map((user) => {
//           let idNow = user.id;
//           user.tags.forEach((element) => {
//             document
//               .querySelector("#tag" + idNow)
//               .insertAdjacentHTML(
//                 "afterbegin",
//                 `<button class="navigation__tag" id="${element}">#${element}</button>`
//               );
//           });
//         })
//         .join("");
//       document
//         .querySelector(".user--tag")
//         .insertAdjacentHTML("afterbegin", html);
//       return data;
//     })
//     .then((data) => {
//       const html = data.photographers;
//     })

//     .catch((error) => {
//       // ERROR OPTION
//       console.log(error);
//     });
// }
// // fetchData(); // EXECUTE
