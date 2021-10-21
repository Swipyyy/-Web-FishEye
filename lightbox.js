function lightBox() {
  let slideIndex = 1;
  showSlides(slideIndex);
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex < 1) {
      slideIndex = slides.length;
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
    console.log(slideIndex);
  }

  let lightBoxImg = document.querySelectorAll(".imgMin");
  console.log(lightBoxImg);
  let c = 1;
  lightBoxImg.forEach(function (item) {
    item.setAttribute("id", c);
    item.addEventListener("click", function test() {
      document.getElementById("myModal").style.display = "flex";
      let m = item.id;
      slideIndex = m;
      showSlides(slideIndex);
    });
    c++;
  });
  let plusSlides = document.getElementById("plusSlides");
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
