// MAIN HEADER
// SEARCH

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
let isFocused = false;
searchEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener("focus", function () {
  // focus 생기면 함수 실행
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  // focus 잃었을 때 실행
  searchInputEl.setAttribute("placeholder", "");
});

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice .notice-line .inner .inner__left .swiper", {
  direction: "vertical", // 수직
  loop: true, // 무한 반복
  autoplay: true, // 자동 실행
}); // 요 선택자를 가지는 곳에 SWIPER 를 적용 해라

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10, // 아이템 간 거리
  centeredSlides: true, // 아이템을 가운데서 불러올거냐
  loop: true,
  autoplay: {
    delay: 1000, // 1초 동안 기다렸다가 다음 장 넘어가고
    disableOnInteraction: false, // 드래드 드롭같은 게 안일어나도록
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// Toggle Promotion
// const promotionSection = document.querySelector(".promotion");
// const promotionToggleBtn = document.querySelectorAll(".notice .toggle-promotion");

// promotionToggleBtn.addEventListener("click", function () {
//   if (promotionSection.classList.contains("hide")) {
//     promotionSection.classList.remove("hide");
//   } else {
//     promotionSection.classList.add("hide");
//   }
// });

//Toggle Promotion
const protmotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (protmotionSection.classList.contains("hide")) {
    protmotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    protmotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// 애니메이션 파트----------------------------------------------------

// Visual
window.onload = () => {
  // 페이지가 로드되자 마자 실행
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// 애니메이션 스크롤 파트
// 엘살바도르
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 135) {
    const elsalvadorSection = this.document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
  if (window.scrollY > 700) {
    const ethiopiaSection = this.document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  if (window.scrollY > 1100) {
    const favoriteSection = this.document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  if (window.scrollY > 1900) {
    const magazineSection = this.document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  if (window.scrollY > 2322) {
    const storeSection = this.document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
