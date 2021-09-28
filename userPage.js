// RECHERCHE DE L'ID

var userUrl = window.location.search;
const urlParams = new URLSearchParams(userUrl);
const idUser = urlParams.get("id");

// IMPORT DES DONNEES JSON

rcq.then((response) => {
  console.log(response);

  const userData = response.json();
  console.log(userData);

  userData.then((utilisateur) => {
    const userr = utilisateur.photographers;
    console.log(userr);
    for (let i = 0; userr[i]; i++) {
      if (userr[i].id == idUser) {
        document.getElementById("banner").innerHTML = `
        <!-- BANNIERE PHOTOGRAPHE -->
        <div class="userPage">
          <div class="userPage--detail">
            <h1>${userr[i].name}</h1>
            <div class="userPage--description">
              <h3>${userr[i].city}, ${userr[i].country}</h3>
              <span class="userPage__citation"
                >${userr[i].tagline}</span
              >
            </div>
            <div class="userPage__tag">
              <button class="navigation__tag">#${userr[i].tags}</button>
            </div>
          </div>
          <div class="userPage--contact">
            <button class="openContact">Contactez-moi</button>
          </div>
        </div>
        <div class="userDetailImg">
          <img
            class="userDetailImg__img"
            src="img/Photographers ID Photos/${userr[i].portrait}"
            alt="MimiKeel"
          />
        </div>`;
        document.getElementById("sortBy").innerHTML = `<div class="sortBy">
        <span class="sortBy__text">Trier par</span>
        <select class="tri" name="sort" id="sortByList">
          <option value="popular">Popularité</option>
          <option value="date">Date</option>
          <option value="title">Titre</option>
        </select>
      </div>`;
      }
    }
    const medias = utilisateur.media;
    for (let i = 0; medias[i]; i++) {
      if (medias[i].photographerId == idUser) {
        if (medias[i].image) {
          document.getElementById("photoSection").insertAdjacentHTML(
            "afterbegin",
            `<div class="photo">
        <img
          src="img/img/${medias[i].image}"
          onclick="openModal();currentSlide(1)"
          class="imgMin"
        />
        <div class="footerPhoto">
          <p class="picDescription">${medias[i].title}</p>
        </div>
      </div>`
          );
        }
        if (medias[i].video) {
          document.getElementById("photoSection").insertAdjacentHTML(
            "beforeend",
            `<div class="video">
            <video controls>
            <source
              src="img/videos/${medias[i].video}"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="footerPhoto">
          <p class="picDescription">${medias[i].title}</p>
        </div>
        </div>`
          );
        }
      }
    }
  });
});
