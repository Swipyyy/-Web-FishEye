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
        document.getElementById("userWrap").innerHTML = `<div class="banner">
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
        </div>
      </div>
      <div class="sortBy">
        <span class="sortBy__text">Trier par</span>
        <select class="tri" name="sort" id="sortByList">
          <option value="popular">Popularité</option>
          <option value="date">Date</option>
          <option value="title">Titre</option>
        </select>
      </div>
      <div class="photoSection">
        <div class="photo">
          <img
            src="img/Mimi/Animals_Rainbow.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Travel_Lonesome.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Event_BenevidesWedding.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Event_PintoWedding.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Event_SeasideWedding.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Portrait_Background.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Portrait_Nora.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Portrait_Wednesday.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <div class="photo">
          <img
            src="img/Mimi/Travel_HillsideColor.jpg"
            onclick="openModal();currentSlide(1)"
            class="imgMin"
          />
          <div class="footerPhoto">
            <p class="picDescription">Test</p>
          </div>
        </div>
        <video width="350" height="350" controls>
          <source
            src="img/Mimi/Animals_Wild_Horses_in_the_mountains.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>`;
      }
    }
  });
});
