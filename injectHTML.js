// HTML INJECTION IN USER PAGE //
//
//
// BANNER
function injectUserBanner(userr, i) {
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
      <div class="userPage__tag" id="tag">
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
}

// FILTER BUTTON
function injectUserFilter() {
  document.getElementById("sortBy").innerHTML = `<div class="sortBy">
  <span class="sortBy__text">Trier par</span>
  <select class="tri" name="sort" id="sortByList">
    <option value="popular">Popularité</option>
    <option value="date">Date</option>
    <option value="title">Titre</option>
  </select>
  </div>`;
}

// PICS
function injectPics(medias, i) {
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
    <div class ="likeSection" id="like${[i]}">
    <p class ="nbLike" id="nbLike${[i]}">${medias[i].likes}</p>
    <i class="fas fa-heart"></i>
    </div>
  </div>
  </div>`
  );
}

// VIDEOS
function injectVideos(medias, i) {
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
  <div class ="likeSection" id="like${[i]}">
  <p class ="nbLike" id="nbLike${[i]}">${medias[i].likes}</p>
  <i class="fas fa-heart"></i>
  </div>
  </div>`
  );
}

// function injectButtons(userr, i) {
//   document
//     .getElementById("tag")
//     .insertAdjacentHTML(
//       "afterbegin",
//       `<button class="navigation__tag">#${userr[i].tags[i]}</button>`
//     );
// }
