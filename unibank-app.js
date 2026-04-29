// ===== CAROUSEL =====
const track = document.getElementById("carouselTrack");
const slides = track.querySelectorAll(".carousel__slide");
const dotsContainer = document.getElementById("carouselDots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let current = 0;
let autoSlideTimer;

// Create dots
slides.forEach(function (_, i) {
  var dot = document.createElement("button");
  dot.classList.add("carousel__dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", function () {
    goTo(i);
  });
  dotsContainer.appendChild(dot);
});

var dots = dotsContainer.querySelectorAll(".carousel__dot");

function goTo(index) {
  dots[current].classList.remove("active");
  current = index;
  if (current >= slides.length) current = 0;
  if (current < 0) current = slides.length - 1;
  track.style.transform = "translateX(-" + current * 100 + "%)";
  dots[current].classList.add("active");
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(function () {
    goTo(current + 1);
  }, 4500);
}

prevBtn.addEventListener("click", function () {
  goTo(current - 1);
});

nextBtn.addEventListener("click", function () {
  goTo(current + 1);
});

// Touch/swipe support
var touchStartX = 0;
track.addEventListener(
  "touchstart",
  function (e) {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);

track.addEventListener(
  "touchend",
  function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
  },
  { passive: true },
);

resetAutoSlide();

// ===== MOBILE BURGER =====
var burgerBtn = document.getElementById("burgerBtn");
var mobileNav = document.getElementById("mobileNav");

burgerBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});

// ===== CURRENCY CALCULATOR =====
// Approximate fixed rates relative to AZN
var rates = {
  AZN: 1,
  USD: 1.7,
  EUR: 1.88,
  GBP: 2.18,
  RUB: 0.019,
};

var fromVal = document.getElementById("fromVal");
var toVal = document.getElementById("toVal");
var fromCurr = document.getElementById("fromCurr");
var toCurr = document.getElementById("toCurr");
var swapBtn = document.getElementById("swapBtn");

function calculate() {
  var amount = parseFloat(fromVal.value);
  if (isNaN(amount) || amount === "") {
    toVal.value = "";
    return;
  }
  var from = fromCurr.value;
  var to = toCurr.value;

  // Convert from -> AZN -> to
  var inAZN = amount * rates[from];
  var result = inAZN / rates[to];
  toVal.value = result.toFixed(4);
}

fromVal.addEventListener("input", calculate);
fromCurr.addEventListener("change", calculate);
toCurr.addEventListener("change", calculate);

swapBtn.addEventListener("click", function () {
  var tempCurr = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = tempCurr;

  var tempVal = fromVal.value;
  fromVal.value = toVal.value;
  calculate();
});
