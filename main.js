const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const portraitImages = [
  "assets/viral/potrait/1.jpg",
  "assets/viral/potrait/2.jpg",
  "assets/viral/potrait/3.jpg",
  "assets/viral/potrait/4.jpg",
  "assets/viral/potrait/5.jpg",
  "assets/viral/potrait/6.jpg"
];

const pre_weddingImages = [
  "assets/viral/weddings/0.jpg",
  "assets/viral/weddings/1.jpg",
  "assets/viral/weddings/2.jpg",
  "assets/viral/weddings/3.jpg",
  "assets/viral/weddings/4.jpg",
  "assets/viral/weddings/5.jpg",
];

const weddingImages = [
  "assets/viral/weddings/0.jpg",
  "assets/viral/weddings/1.jpg",
  "assets/viral/weddings/2.jpg",
  "assets/viral/weddings/3.jpg",
  "assets/viral/weddings/4.jpg",
  "assets/viral/weddings/5.jpg",
];

let currentIndex = 0;
let currentImages = [];

function openModal(category, index) {
  currentIndex = index;
  switch (category) {
    case 'portraits':
      currentImages = portraitImages;
      break;
    case 'pre-weddings':
      currentImages = pre_weddingImages;
      break;
    case 'weddings':
      currentImages = weddingImages;
      break;
    default:
      currentImages = [];
  }
  
  document.getElementById("portfolioModal").style.display = "block";
  updateModalContent();
}

function closeModal() {
  document.getElementById("portfolioModal").style.display = "none";
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) {
    currentIndex = currentImages.length - 1;
  } else if (currentIndex >= currentImages.length) {
    currentIndex = 0;
  }
  updateModalContent();
}

function updateModalContent() {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = currentImages[currentIndex];

  const imageCounter = document.getElementById("imageCounter");
  imageCounter.innerText = `${currentIndex + 1} / ${currentImages.length}`;

  const imageCaption = document.getElementById("imageCaption");
  imageCaption.innerText = imageCaptions[modalImage.src] || '';
}

window.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    changeImage(-1);
  } else if (e.key === "ArrowRight") {
    changeImage(1);
  } else if (e.key === "Escape") {
    closeModal();
  }
});

window.onclick = function(event) {
  const modal = document.getElementById("portfolioModal");
  if (event.target == modal) {
    closeModal();
  }
};




window.onload = function() {
  document.getElementById('preloader').style.display = 'none';
}

document.getElementById('mute-toggle').addEventListener('click', function() {
  var video = document.getElementById('bg-video');
  video.muted = !video.muted;  // Toggle the muted property
  this.textContent = video.muted ? 'Unmute' : 'Mute';
});




window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});