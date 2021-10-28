/*
 * HTML INJECTION IN USER PAGE
 * BANNER
 */
function injectUserBanner(photographers) {
  document.getElementById("banner").innerHTML = `
  <!-- BANNIERE PHOTOGRAPHE -->
  <div class="userPage">
    <div class="userPage--detail">
      <h1>${photographers.name}</h1>
      <div class="userPage--description">
        <h3>${photographers.city}, ${photographers.country}</h3>
        <span class="userPage__citation"
          >${photographers.tagline}</span
        >
      </div>
      <div class="userPage__tag" id="tag">
      </div>
    </div>
    <div class="userPage--contact">
      <button class="openContact" aria-label="Contact Me">Contactez-moi</button>
    </div>
  </div>
  <div class="userDetailImg">
    <img
      class="userDetailImg__img"
      src="./img/Photographers ID Photos/${photographers.portrait}"
      alt="${photographers.name}"
    />
  </div>`;
}

// USER TAGS

function injectUserTags(photographers) {
  photographers.tags.forEach((element) => {
    document.
      querySelector("#tag").
      insertAdjacentHTML(
        "afterbegin",
        `<a class="navigation__tag" href="./index.html?tag=${element}"><span aria-label="tag">#${element}</span</a>`
      );
  });
}

// FILTER BUTTON
function injectUserFilter() {
  document.getElementById("sortBy").innerHTML = `<div class="sortBy">
  <span class="sortBy__text">Trier par</span>
  <select class="tri" name="sort" id="sortByList" aria-label="Order By">
    <option value="popular">Popularité</option>
    <option value="date">Date</option>
    <option value="title">Titre</option>
  </select>
  </div>`;
}

// PICS
function injectPics(medias) {
  document.getElementById("photoSection").insertAdjacentHTML(
    "afterbegin",
    `<div class="photo">
  <img
    src="./img/img/${medias.image}"
    class="imgMin"
    alt="${medias.description}"
  />
  <div class="footerPhoto">
    <p class="picDescription">${medias.title}</p>
    <div class ="likeSection" id="like${medias.id}">
    <p class ="nbLike" id="nbLike${medias.id}">${medias.likes}</p>
    <i class="fas fa-heart" aria-label="likes"></i>
    </div>
  </div>
  </div>`
  );
}

// VIDEOS
function injectVideos(medias) {
  document.getElementById("photoSection").insertAdjacentHTML(
    "afterbegin",
    `<div class="video">
  <video class="imgMin">
  <source
    src="./img/videos/${medias.video}"
    type="video/mp4"
    alt="${medias.description}"
  />
  Your browser does not support the video tag.
  </video>
  <div class="footerPhoto">
  <p class="picDescription">${medias.title}</p>
  <div class ="likeSection" id="like${medias.id}">
  <p class ="nbLike" id="nbLike${medias.id}">${medias.likes}</p>
  <i class="fas fa-heart"></i>
  </div>
  </div>`
  );
}

// LIGHTBOX
function injectLightbox(medias) {
  document.getElementById("modal-content").insertAdjacentHTML(
    "afterbegin",
    `
      <div class="mySlides">
        <img src="./img/img/${medias.image}" alt="${medias.description}">
        <span class="slideTitle" id="slideTitle">${medias.title}</span>
      </div>`
  );
}

// LIGHTBOX VIDEOS
function injectLightboxVideo(medias) {
  document.getElementById("modal-content").insertAdjacentHTML(
    "afterbegin",
    `
      <div class="mySlides">
      <video controls width="750">
      <source
        src="./img/videos/${medias.video}"
        type="video/mp4"
        alt="${medias.description}"
      />
      </video>
        <span class="slideTitle" id="slideTitle">${medias.title}</span>
      </div>`
  );
}

// LIGHTBOX CONTROLS
function injectLightBoxControls() {
  document.getElementById("modal-content").insertAdjacentHTML(
    "beforeend",
    `  <span class="closeModal" id="closeModal" aria-label="Close dialog">&times;</span>
<a class="prev" id="prevSlides" aria-label="Previous image">&#10094;</a>
<a class="next" id="plusSlides" aria-label="Next Image">&#10095;</a>`
  );
}

// CONTACT BUTTON
function injectContact(photographers) {
  document.getElementById("contactSection").innerHTML = `
  <div class="contactSection--like">
  <p class ="contactSection__nbLike">297 081</p>
  <i class="fas fa-heart"></i>
  </div>
  <div class="contactSection__price">${photographers.price}€ / jour</div>`;
}

// CONTACT FORM
function injectContactForm(photographers) {
  document.getElementById("bground").innerHTML = `        <div class="content">
  <span id="close" class="close"></span>
  <div class="modal-body" id="body">
    <span class="modal-title">Contactez-moi</span>
    <span class="modal-title">${photographers.name}</span>
    <!-- Appel fonction JS / déclaration formulaire -->
    <form id="form" name="reserve" action="" method="">
      <!-- Sections de saisies -->
      <div id="errorFirst" class="formData">
        <label for="first">Prénom</label><br />
        <input
          class="text-control"
          type="text"
          id="first"
          name="first"
          minlength="2"
        /><br />
      </div>
      <div id="errorLast" class="formData">
        <label for="last">Nom</label><br />
        <input
          class="text-control"
          type="text"
          id="last"
          name="last"
          minlength="2"
        /><br />
      </div>
      <div id="errorMail" class="formData">
        <label for="email">E-mail</label><br />
        <input
          class="text-control"
          type="email"
          id="email"
          name="email"
        /><br />
      </div>
      <div id="message" class="formData">
        <label for="textMessage">Message</label><br />
        <textarea
          class="text-control text-control__message"
          type="textarea"
          id="textMessage"
          name="textMessage"
        ></textarea
        ><br />
      </div>
      <!-- Bouton d'envoi -->
      <input
        class="btn-submit"
        type="button"
        id="button"
        value="Envoyer"
      />
    </form>
  </div>
</div>`;
}

export {
  injectContact,
  injectContactForm,
  injectLightBoxControls,
  injectLightbox,
  injectLightboxVideo,
  injectPics,
  injectUserBanner,
  injectUserFilter,
  injectUserTags,
  injectVideos
};
