const sliderImg = document.getElementById("slider-img");
const backBtn = document.getElementById("back");
const forthBtn = document.getElementById("forth");
const dotsContainer = document.getElementById("dots-container");
const title = document.getElementById("img-title");

const images = [
  {
    src: "pic1.jpg",
    text: "Nature View",
  },

  {
    src: "pic2.jpg",
    text: "Mountain Landscape",
  },

  {
    src: "pic3.jpg",
    text: "Beautiful Sunset",
  },

  {
    src: "pic4.jpg",
    text: "City Lights",
  },

  {
    src: "pic5.png",
    text: "Ocean Side",
  },
];

let count = 0;

function showImage(index) {
  sliderImg.style.opacity = 0;

  setTimeout(() => {
    sliderImg.src = `images/${images[index].src}`;
    title.textContent = images[index].text;

    sliderImg.style.opacity = 1;
  }, 200);

  updateDots();
}

function nextImage() {
  count++;

  if (count >= images.length) {
    count = 0;
  }

  showImage(count);
}

function prevImage() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }

  showImage(count);
}

forthBtn.addEventListener("click", nextImage);

backBtn.addEventListener("click", prevImage);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextImage();
  }

  if (e.key === "ArrowLeft") {
    prevImage();
  }
});

function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("div");

    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      count = index;
      showImage(count);
    });

    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[count].classList.add("active");
}

createDots();

setInterval(() => {
  nextImage();
}, 4000);
