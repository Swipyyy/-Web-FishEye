function lightBox() {
  let slideIndex = 1; // INITIALIZE THE ROTATION OF SLIDES
  showSlides(slideIndex);
  function showSlides(n) {
    let i = 0;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex < 1) {
      slideIndex = slides.length; // ROTATION
    }
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    if (n > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
    document.onkeydown = checkKey; // KEYBOARD CONTROL
    function checkKey(e) {
      e = e || window.event;

      if (e.keyCode == "27") {
        document.getElementById("myModal").style.display = "none";
      } else if (e.keyCode == "37") {
        showSlides(slideIndex--);
      } else if (e.keyCode == "39") {
        showSlides(slideIndex++);
      }
    }
  }

  let lightBoxImg = document.querySelectorAll(".imgMin"); // OPEN LIGHTBOX
  let c = 1;
  lightBoxImg.forEach(function (item) {
    item.setAttribute("id", c);
    item.addEventListener("click", function modalRotation() {
      document.getElementById("myModal").style.display = "flex";
      let m = item.id;
      slideIndex = m;
      showSlides(slideIndex);
    });
    c++;
  });
  let plusSlides = document.getElementById("plusSlides"); // LIGHTBOX CONTROLS
  plusSlides.addEventListener("click", function plusSl() {
    showSlides(slideIndex++);
  });
  let prevSlides = document.getElementById("prevSlides");
  prevSlides.addEventListener("click", function prevSl() {
    showSlides(slideIndex--);
  });

  let closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", function closeThis() {
    document.getElementById("myModal").style.display = "none";
  });
}

export { lightBox };
