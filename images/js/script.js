window.addEventListener('DOMContentLoaded' ,function(){
  let pages= document.querySelectorAll('.mv-img').length;
  let moveX= -100 + (100 / pages)
  gsap.to('.mv__img',{xPercent:moveX,ease:'none',scrollTrigger:{
    trigger:'.mv__scroll-wrap',
    start:'top top',
    end:'bottom',
    pin:true,
    scrub:1,
    ease: 'power1.out',
  }})
})
gsap.to('.mv__title-wrap', {
  opacity: 0,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.mv',
    start: '140% center', // mvが終わる手前でフェードアウト
    end: '140% center', // 完全に見えなくなるタイミング
    scrub: 1,
  }
});


jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ハンバーガーメニュー
    $(".js-hamburger").click(function () {
      $(this).toggleClass("is-open");
      $(".js-drawer").toggleClass('is-open');
      $(".js-drawer-background").toggleClass('is-open');
  });

    // ドロワーの背景部分をクリックしたときにドロワーを閉じる処理
    $(".js-drawer-background").click(function () {
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer").removeClass("is-open");
      $(".js-drawer-background").removeClass("is-open");
  });

  $(".header__drawer").click(function (event) {
    // クリックされた要素が `.header__drawer-wrap` の中身でなければ閉じる
    if (!$(event.target).closest(".header__drawer-wrap").length) {
        $(".js-hamburger").removeClass("is-open");
        $(".header").removeClass("is-open");
        $(".js-drawer").removeClass("is-open");
    }
});

  // ドロワーナビのaタグをクリックで閉じる
  $(".js-drawer a[href]").on("click", function () {
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer").removeClass('is-open');
      $(".js-drawer-background").removeClass('is-open');
  });

// gsap



// mv横スクロール
// document.addEventListener("DOMContentLoaded", () => {
//   /* horizontal scroll */
//   const stickyContainers = document.querySelectorAll(".horizontal_scroll");

//   stickyContainers.forEach((stickyContainer) => {
//     // get elements
//     const stickyItem = stickyContainer.querySelector(".sticky");
//     const scroller = stickyContainer.querySelector(".scroller");
//     scroller.classList.add("nobar");

//     // set sticky height
//     const updateStickyHeight = () => {
//       const stickyHeight = scroller.scrollWidth - scroller.clientWidth + stickyItem.clientHeight;
//       stickyContainer.style.setProperty("--sticky-container-height", `${stickyHeight}px`);
//     };
//     updateStickyHeight();
//     new ResizeObserver(updateStickyHeight).observe(scroller);
//     new ResizeObserver(updateStickyHeight).observe(stickyItem);

//     // sync scroll
//     const syncScroll = () => {
//       const rect = stickyContainer.getBoundingClientRect();
//       if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
//         scroller.scrollLeft = window.scrollY - stickyContainer.offsetTop;
//       } else if (rect.bottom < window.innerHeight) {
//         scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
//       } else {
//         scroller.scrollLeft = 0;
//       }
//     };
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             window.addEventListener("scroll", syncScroll, { passive: true });
//             syncScroll();
//           } else {
//             window.removeEventListener("scroll", syncScroll);
//           }
//         });
//       },
//       { threshold: 0 }
//     );
//     observer.observe(stickyContainer);

//     // end of forEach
//   });

//   // end of DOMContentLoaded
// });











//ページトップに戻るボタン
const pageTop = $(".js-page-top");
pageTop.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 900) {
    pageTop.fadeIn();
} else {
    pageTop.fadeOut();
}
});
pageTop.click(function () {
$("body,html").animate(
    {
    scrollTop: 0,
    },
    500
);
return false;
});



// // フッター手前でストップ
// $(".js-page-top").hide();
// $(window).on("scroll", function () {
//   scrollHeight = $(document).height();
//   scrollPosition = $(window).height() + $(window).scrollTop();
//   footHeight = $("js-footer").innerHeight();
//   if (scrollHeight - scrollPosition <= footHeight) {
// // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
//     $(".js-page-top").css({
//       position: "absolute",
//       bottom: footHeight,
//     });
//   } else {
//     $(".js-page-top").css({
//       position: "fixed",
//       bottom: "500px",
//     });
//   }
// });




    var swiper = new Swiper(".js-sub-menu-swiper", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 4,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }
    });


  // スライダー
  var swiper = new Swiper(".js-mv-swiper", {
  centerMode: true,
  loop: true,
  speed: 2000,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
  },
  pagination: {
  el: ".swiper-pagination"
  },
  keyboard: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: false
  },
  effect: "fade", // ここでフェード効果を指定します
  fadeEffect: {
  crossFade: true // クロスフェードを有効にして、スライドの切り替わりをスムーズにします
  }
  });

  // WORKSスライダー
  let mainWorksSwiper; // Swiperの変数を定義

  function initMainWorksSwiper() {
      let windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
          // Swiperが未定義なら初期化（PCのみ動作）
          if (!mainWorksSwiper) {
              mainWorksSwiper = new Swiper(".js-works-swiper", {
                  slidesPerView: 3, // PCでは3枚表示
                  spaceBetween: 30,
                  loop: true,
                  loopAdditionalSlides: 3, // 追加
                  speed: 2000,
                  navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                  },
                  pagination: {
                      el: ".works__pagination",
                      clickable: true,
                      renderBullet: function (index, className) {
                          return `<span class="${className}" data-index="${index}"></span>`;
                      },
                  },
                on: {
                    init: function (swiper) {
                        updatePagination(swiper);
                    },
                    slideChange: function (swiper) {
                        updatePagination(swiper);
                    },
                },
            });
        }
      } else {
          // すでにSwiperが存在していたら破棄（スマホでは無効化）
          if (mainWorksSwiper) {
              mainWorksSwiper.destroy(true, true);
              mainWorksSwiper = undefined;
          }
      }
  }
  function updatePagination(swiper) {
    let bullets = document.querySelectorAll(".works__pagination .swiper-pagination-bullet");

    if (bullets.length === 0) return; // bullets が存在しない場合は処理をスキップ

    bullets.forEach((bullet) => bullet.classList.remove("swiper-pagination-bullet-active"));

    let activeIndex = swiper.realIndex % bullets.length;
    if (bullets[activeIndex]) {
        bullets[activeIndex].classList.add("swiper-pagination-bullet-active");
    }
}



   // worksグラフカードスライダー
   let worksSwiper;
   function initWorksSwiper() {
       let windowWidth = window.innerWidth;
       if (windowWidth < 768) {
           // Swiperが未定義なら初期化
           if (!worksSwiper) {
            worksSwiper = new Swiper(".js-works-cards-swiper", {
    spaceBetween: 6,
    slidesPerView: "auto",
    centerMode: true,
    loop: true,
    loopAdditionalSlides: 1,
    // loopedSlides: 2,
    // loopFillGroupWithBlank: true,
    grabCursor: true,
    speed: 2000,
    // navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    // },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
    768: {
        spaceBetween: 40,
    },
    },
});
}
} else {
    // すでにSwiperが存在していたら破棄
    if (worksSwiper) {
        worksSwiper.destroy(true, true);
        worksSwiper = undefined;
    }
}
}

   // nicebaseカードスライダー
   let nicebaseSwiper;
   function initNicebaseSwiper() {
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
    if (!nicebaseSwiper) {
        nicebaseSwiper = new Swiper(".js-nicebase-cards-swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    centerMode: true,
    loop: true,
    loopAdditionalSlides: 1,
    // loopedSlides: 2,
    // loopFillGroupWithBlank: true,
    grabCursor: true,
    speed: 2000,
    // navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    // },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
    768: {
        spaceBetween: 40,
    },
    },
});
}
} else {
    if (nicebaseSwiper) {
        nicebaseSwiper.destroy(true, true);
        nicebaseSwiper = undefined;
    }
}
}

   // expertカードスライダー
   let expertSwiper;
   function initExpertSwiper() {
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
    if (!expertSwiper) {
      expertSwiper = new Swiper(".js-expert-cards-swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    centerMode: true,
    loop: true,
    loopAdditionalSlides: 1,
    // loopedSlides: 2,
    // loopFillGroupWithBlank: true,
    grabCursor: true,
    speed: 2000,
    // navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    // },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
    768: {
        spaceBetween: 40,
    },
    },
});
}
} else {
    if (expertSwiper) {
      expertSwiper.destroy(true, true);
      expertSwiper = undefined;
    }
}
}

//ITEM
document.addEventListener("DOMContentLoaded", function () {
  // Swiper の初期化
  const swiper = new Swiper(".js-item-swiper", {
      spaceBetween: 20, // スライド間の余白
      slidesPerView: 1, // 1スライドに5枚セットを表示
      loop: true, // ループスライダー
      // navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      // },
  });
});
// ITEMスライダー
// let itemSwiper;
// function initItemSwiper() {
//  let windowWidth = window.innerWidth;
//  if (windowWidth < 768) {
//  if (!itemSwiper) {
//   itemSwiper = new Swiper(".js-item-swiper", {
//  spaceBetween: 20,
//  slidesPerView: 1,
//  centerMode: true,
//  loop: true,
//  loopAdditionalSlides: 1,
//  // loopedSlides: 2,
//  // loopFillGroupWithBlank: true,
//  grabCursor: true,
//  speed: 2000,
//  // navigation: {
//  // nextEl: ".swiper-button-next",
//  // prevEl: ".swiper-button-prev",
//  // },
//  autoplay: {
//    delay: 3000,
//    disableOnInteraction: false,
//  },
//  breakpoints: {
//  768: {
//      spaceBetween: 40,
//  },
//  },
// });
// }
// } else {
//  if (itemSwiper) {
//   itemSwiper.destroy(true, true);
//   itemSwiper = undefined;
//  }
// }
// }


 // flowカードスライダー
let flowSwiper;
function initFlowSwiper() {
 let windowWidth = window.innerWidth;
 if (windowWidth < 768) {
 if (!flowSwiper) {
  flowSwiper = new Swiper(".js-flow-cards-swiper", {
 spaceBetween: 50,
 slidesPerView: "auto",
 centerMode: true,
 loop: true,
 loopAdditionalSlides: 1,
 // loopedSlides: 2,
 // loopFillGroupWithBlank: true,
 grabCursor: true,
 speed: 2000,
 navigation: {
 nextEl: ".swiper-button-next",
 prevEl: ".swiper-button-prev",
 },
//  autoplay: {
//    delay: 3000,
//    disableOnInteraction: false,
//  },
 breakpoints: {
 768: {
     spaceBetween: 40,
 },
 },
});
}
} else {
 if (flowSwiper) {
  flowSwiper.destroy(true, true);
  flowSwiper = undefined;
 }
}
}
    // 初回実行
    initMainWorksSwiper();
    initWorksSwiper();
    initNicebaseSwiper();
    initExpertSwiper();
    // initItemSwiper();
    initFlowSwiper();

    // リサイズ時にSwiperの状態をチェック
    $(window).on("resize", function () {
      initMainWorksSwiper();
      initWorksSwiper();
      initNicebaseSwiper();
      initExpertSwiper();
      // initItemSwiper();
      initFlowSwiper();
    });
});


// WORKSモーダル
// let scrollPosition;

// $(document).on("click", ".js-modal-open", function () {
//   scrollPosition = $(window).scrollTop(); // 現在のスクロール位置を保存

//   // 背景のスクロールを防ぐ
//   $("body").addClass("fixed-body").css({
//     top: -scrollPosition + "px",
//   });

//   $(".js-works-modal").fadeIn();
//   return false;
// });

// $(document).on("click", ".js-modal-close", function () {
//   $(".js-works-modal").fadeOut(function () {
//     $("body").removeClass("fixed-body").css({
//       position: "",
//       top: "",
//       width: "",
//       overflow: "",
//     });

//     // **スクロール位置を戻す**
//     window.scrollTo(0, scrollPosition);
//   });
//   return false;
// });





// $('.js-modal-open').on('click', function () {
//   $('.js-works-modal').toggleClass('is-open');
//   $('body,html').css('overflow-y', 'hidden');
// });
// $('.js-works-modal__close').on('click', function () {
//   $('.js-works-modal').toggleClass('is-open');
//   $('body,html').css('overflow-y', '');
// });
// $('.js-works-modal__background').on('click', function () {
//   $('.js-works-modal').toggleClass('is-open');
//   $('body,html').css('overflow-y', '');
// });

//worksモーダル
$(document).on('click', '.js-works-modal-open', function (e) {
  e.preventDefault();

  let modalId = $(this).data('modal'); // data-modal のIDを取得
  let targetModal = $('#' + modalId); // IDを元に対象のモーダルを取得

  if (targetModal.length) {
    $('.works-modal').removeClass('is-open'); // 他のモーダルを閉じる（競合回避）
    targetModal.addClass('is-open'); // クリックされたモーダルを開く
    $('body, html').css('overflow', 'hidden'); // 背景スクロールを防止
  }
});

// モーダルを閉じる処理（✗ボタン または 背景クリック）
$(document).on('click', '.js-works-modal__close, .works-modal__background', function () {
  $(this).closest('.works-modal').removeClass('is-open'); // クリックされたモーダルを閉じる
  $('body, html').css('overflow', ''); // スクロールを元に戻す
});

// モーダルの内部をクリックした際に閉じないようにする
$(document).on('click', '.works-modal__content', function (e) {
  e.stopPropagation(); // クリックイベントの伝播を防ぐ
});



const open = $(".js-modal-open"),
modal = $(".js-modal");

open.on("click", function () {
  $(".p-sub-gallery__modal-img").html($(this).prop("outerHTML"));
  modal.addClass("is-open");
  $('body,html').css('overflow-y', 'hidden');
});
modal.on("click", function () {
  modal.removeClass("is-open");
  $('body,html').css('overflow-y', 'visible');
});


//worksスマホ時追加表示
document.addEventListener("DOMContentLoaded", function () {
  let worksList = document.querySelectorAll(".works-list__item");
  let loadMoreBtn = document.querySelector(".works__list-btn");
  let itemsPerClick = 3; // 1回のクリックで追加表示する件数
  let currentIndex = 3; // 最初に表示する件数
  let isMobile = window.innerWidth < 768; // スマホ判定

  function updateListDisplay() {
    worksList.forEach((item, index) => {
        if (isMobile) {
            item.style.display = index < currentIndex ? "block" : "none";
        } else {
            item.style.display = "block"; // PC時は全て表示
        }
    });

    if (isMobile && currentIndex >= worksList.length) {
        loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "flex";
    }
}

function resetMobileView() {
    if (window.innerWidth < 768) {
        isMobile = true;
        currentIndex = 3; // スマホ時の初期表示をリセット
        updateListDisplay();
    } else {
        isMobile = false;
        updateListDisplay();
    }
}

// 初期表示設定
updateListDisplay();

// ボタンクリック時の処理
loadMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (isMobile) {
        currentIndex += itemsPerClick;
        updateListDisplay();
    }
});

// ウィンドウサイズ変更時の処理（リサイズ時にスマホになったらリセット）
window.addEventListener("resize", resetMobileView);
});

//nicebase-card__titleのアニメーション
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".nicebase-card");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("is-animated");
          }
      });
  }, {
      threshold: 0.5, // 50%見えたら発火
  });

  cards.forEach((card) => {
      observer.observe(card);
  });
});

//service-card__title-textのアニメーション
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("is-animated");
          }
      });
  }, {
      threshold: 0.5, // 50%見えたら発火
  });

  cards.forEach((card) => {
      observer.observe(card);
  });
});






// アコーディオン
// $(".js-accordion-item:first-child .js-accordion-content").css(
//   "display",
//   "block"
// );
// $(".js-accordion-item:first-child .js-accordion-title").addClass(
//   "is-open"
// );
// $(".js-accordion-title").on("click", function () {
//   $(this).toggleClass("is-open");
//   $(this).next(".js-accordion-content").slideToggle(500);
// });


// $(".js-accordion-item:first-child .js-accordion-content").css("display", "block");
//   $(".js-accordion-item:first-child .js-accordion-title").addClass("is-open");

//   $(".js-accordion-title").on("click", function () {
//     let parentItem = $(this).closest(".js-accordion-item");

//     if (parentItem.hasClass("is-open")) {
//       // 閉じる動作
//       parentItem.removeClass("is-open");
//       $(this).next(".js-accordion-content").slideUp(500);
//     } else {
//       // 他のアコーディオンを閉じる
//       $(".js-accordion-item").removeClass("is-open");
//       $(".js-accordion-content").slideUp(500);

//       // 開くアコーディオン
//       parentItem.addClass("is-open");
//       $(this).next(".js-accordion-content").slideDown(500);
//     }
//   });

  $(".js-accordion-content").hide();

  $(".js-accordion-title").on("click", function () {
    let parentItem = $(this).closest(".js-accordion-item");
    let content = parentItem.find(".js-accordion-content");

    if (parentItem.hasClass("is-open")) {
      // 閉じる動作
      parentItem.removeClass("is-open");
      content.stop().slideUp(500);
    } else {
      // 他のアコーディオンを閉じる
      $(".js-accordion-item").removeClass("is-open");
      $(".js-accordion-content").stop().slideUp(500);

      // クリックしたアコーディオンを開く
      parentItem.addClass("is-open");
      content.stop().slideDown(500);
    }
  });


// Q&Aアコーディオン
// $(document).ready(function () {
// $(".faq-question-list .js-faq-accordion-item:first-child .js-faq-accordion-content").css("display", "block");
// $(".faq-question-list .js-faq-accordion-item:first-child .js-faq-accordion-title").addClass("is-open");

// $(".js-faq-accordion-title").on("click", function () {
//   let parentItem = $(this).closest(".js-faq-accordion-item");
//   let content = parentItem.find(".js-faq-accordion-content");

//   if (parentItem.hasClass("is-open")) {
//     // FAQは個別に開閉
//     parentItem.removeClass("is-open");
//     content.stop().slideUp(500);
//   } else {
//     // 他のアコーディオンを閉じずに開く（複数開閉可能）
//     parentItem.addClass("is-open");
//     content.stop().slideDown(500);
//   }
// });
// });


// $(".js-faq-accordion-item:first-of-type .js-faq-accordion-content").css(
//   "display",
//   "block"
// );
// $(".js-faq-accordion-item:first-of-type .js-faq-accordion-title").addClass(
//   "is-open"
// );

// $(".js-faq-accordion-title").on("click", function () {
//   $(this).toggleClass("is-open");
//   $(this).next(".js-faq-accordion-content").slideToggle(500);
// });

// let $firstItem = $(".js-faq-accordion-item:first-of-type");
// let $firstTitle = $firstItem.find(".js-faq-accordion-title");
// let $firstContent = $firstItem.find(".js-faq-accordion-content");

// $firstTitle.addClass("is-open");
// $firstContent.css({
//   display: "block",
//   height: "auto" // ✅ 高さを明示的に設定
// });

// $(".js-faq-accordion-item:not(:first-of-type) .js-faq-accordion-content").css("display", "none");


// $(".js-faq-accordion-title").on("click", function () {
//   let $this = $(this);
//   let $content = $this.next(".js-faq-accordion-content");

//   // ✅ すでに開いている場合は閉じる
//   if ($this.hasClass("is-open")) {
//     $this.removeClass("is-open");
//     $content.slideUp(500);
//   } else {
//     // ✅ 他のアコーディオンを閉じる
//     $(".js-faq-accordion-title").removeClass("is-open");
//     $(".js-faq-accordion-content").slideUp(500);

//     // ✅ クリックした要素を開く
//     $this.addClass("is-open");
//     $content.slideDown(500);
//   }
// });

// faqアコーディオン
 // ✅ 最初のリストのみ開いた状態にする
 $(".js-faq-accordion-item").first().find(".js-faq-accordion-title").addClass("is-open");
 $(".js-faq-accordion-item").first().find(".js-faq-accordion-content").show();
 
 // ✅ 他のリストを閉じる（明示的に設定）
 $(".js-faq-accordion-item").not(":first").find(".js-faq-accordion-content").hide();

 // ✅ クリック時のアコーディオン開閉処理
 $(".js-faq-accordion-title").on("click", function () {
   let $this = $(this);
   let $content = $this.next(".js-faq-accordion-content");

   if ($this.hasClass("is-open")) {
     $this.removeClass("is-open");
     $content.slideUp(500);
   } else {
     $(".js-faq-accordion-title").removeClass("is-open");
     $(".js-faq-accordion-content").slideUp(500);

     $this.addClass("is-open");
     $content.slideDown(500);
   }
 });


  // $(".js-load-more-faq").on("click", function (e) {
  //   e.preventDefault();
  //   let $hiddenFaqList = $(".faq-question-list__items--hidden");
  //   let $button = $(this);

  //   if ($hiddenFaqList.is(":visible")) {
  //     // 追加のFAQリストが表示されている場合は閉じる
  //     $hiddenFaqList.slideUp();
  //     $button.text("よくある質問をもっと見る"); // ボタンのテキストを戻す
  //   } else {
  //     // 追加のFAQリストが非表示の場合は表示する
  //     $hiddenFaqList.slideDown();
  //     $button.text("閉じる"); // ボタンのテキストを変更
  //   }
  // });

//  $(".js-load-more-faq").on("click", function (e) {
//   e.preventDefault();
  
//   $(".faq-question-list__items--hidden").slideDown(1000); // 追加のFAQを表示
//   $(this).fadeOut(); // ボタンを非表示
// });

$(".js-load-more-faq").on("click", function (e) {
  e.preventDefault();
  
  $(".faq-question-list__items--hidden").addClass("faq-question-list__items--visible").css("height", "auto"); // CSSでスムーズに表示
  $(this).fadeOut(300); // ボタンをフェードアウト
});





// worksキャラクターアニメーション
function animateWorksImages() {
  $(".works-card__img1").each(function () {
    let elemTop = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > elemTop - windowHeight + 100) {
      $(this).addClass("is-animated");
    }
  });
}

// スクロール時に発火
$(window).on("scroll", function () {
  animateWorksImages();
});

// ページロード時にもチェック
animateWorksImages();



//faqキャラクターアニメーション
function animateFaqImage() {
  let faqImage = $(".faq__img");
  let faqSection = $(".faq");
  
  let elemTop = faqSection.offset().top;
  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();
  
  if (scroll > elemTop - windowHeight + 100) {
    faqImage.addClass("is-animated");
  }
}

// スクロール時に発火
$(window).on("scroll", function () {
  animateFaqImage();
});

// ページロード時にもチェック
animateFaqImage();

// サービスキャラクターアニメーション
function animateServiceImages() {
  $(".service-card__img1").each(function () {
    let elemTop = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > elemTop - windowHeight + 100) {
      $(this).addClass("is-animated");
    }
  });
}

// スクロール時に発火
$(window).on("scroll", function () {
  animateServiceImages();
});


// ページロード時にもチェック
animateWorks1Images();
// WORKSフキダシniceアニメーション
function animateWorks1Images() {
  $(".works__title").each(function () {
    let elemTop = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > elemTop - windowHeight + 100) {
      setTimeout(() => { // ここで遅延させる
        $(this).addClass("is-animated");
      }, 300); // 0.5秒（500ms）遅らせる
    }
  });
}
// スクロール時に発火
$(window).on("scroll", function () {
  animateWorks1Images();
});

// ページロード時にもチェック
animateAbilityImages();
// WORKSフキダシniceアニメーション
function animateAbilityImages() {
  $(".ability-cards").each(function () {
    let elemTop = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > elemTop - windowHeight + 100) {
      setTimeout(() => { // ここで遅延させる
        $(this).addClass("is-animated");
      }, 300); // 0.5秒（500ms）遅らせる
    }
  });
}
// スクロール時に発火
$(window).on("scroll", function () {
  animateAbilityImages();
});



// ページロード時にもチェック
animateService2Images();


// ページロード時にもチェック
animateService2Images();
// サービスフキダシniceアニメーション
function animateService2Images() {
  $(".service-card__img2").each(function () {
    let elemTop = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > elemTop - windowHeight + 100) {
      setTimeout(() => { // ここで遅延させる
        $(this).addClass("is-animated");
      }, 300); // 0.5秒（500ms）遅らせる
    }
  });
}

// スクロール時に発火
$(window).on("scroll", function () {
  animateService2Images();
});

// ページロード時にもチェック
animateService2Images();



// $(".accordion-item:first-of-type .accordion-content").css("display", "block");
// // 最初の矢印は開いた時の状態に
// $(".accordion-item:first-of-type .js-accordion-title").addClass("open");
// // タイトルをクリックすると
// $(".js-accordion-title").on("click", function () {
//   // クリックした次の要素を開閉
//   $(this).next().slideToggle(300);
//   // タイトルにopenクラスを付け外しして矢印の向きを変更
//   $(this).toggleClass("open", 300);
// });




    // MV過ぎたらヘッダー背景色変化
  $(window).on("scroll", function () {
  // メインビジュアルの高さを取得
  var mvHeight = $(".js-mv").height();
  // ウィンドウのスクロール位置がメインビジュアルの高さを超えた場合
  if ($(window).scrollTop() > mvHeight) {
      // ヘッダーに 'is-scroll' クラスを追加
      $(".js-header").addClass("is-scroll");
  } else {
      // それ以外の場合、ヘッダーから 'is-scroll' クラスを削除
      $(".js-header").removeClass("is-scroll");
  }
});

    // ウィンドウのリサイズイベントを設定
    $(window).on('resize', function() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".js-hamburger").removeClass("is-open");
        $(".js-drawer").removeClass("is-open");
        $(".js-drawer-background").removeClass("is-open");
      }
    });

    // スムーススクロール
  $(document).ready(function () {
    function scrollToTarget(target) {
        let time = 400;
        let headerHeight = $('.js-header').innerHeight(); // ヘッダーの高さを取得
        if (target.length) {
            let targetY = target.offset().top - headerHeight; // ヘッダーの高さを考慮
            $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        }
    }

    // ハッシュリンククリック時
    $(document).on('click', 'a[href*="#"]', function (e) {
        e.preventDefault(); // デフォルトのリンク動作を無効にする
        let target = $(this.hash);

        if (target.length) {
            scrollToTarget(target);
        } else {
            window.location.href = $(this).attr('href');
        }
        return false;
    });

    // ページロード時にハッシュがある場合の処理
    if (window.location.hash) {
        let target = $(window.location.hash);
        scrollToTarget(target);
    }
});

// sub-about 左からフェードイン
$(window).on('load scroll', function () {
  var imgBox = $('.js-sub-mvImg');
  var titleBox = $('.js-sub-mvTitle');

  if (imgBox.length && titleBox.length) {
    var imgOffset = imgBox.offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollPos > imgOffset - windowHeight + 100) {
      imgBox.addClass('is-active');

      setTimeout(function () {
        titleBox.addClass('is-active');
      }, 500);
    }
  }
});

$(window).on('load scroll', function () {
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();

  // 右からフェードインするタイトル
  var titleRight = $('.js-common-title-right');
  titleRight.each(function () {
    var titleOffset = $(this).offset().top;
    if (scrollPos > titleOffset - windowHeight + 100) {
      $(this).addClass('is-active');
    }
  });

  // 左からフェードインするタイトル
  var titleLeft = $('.js-common-title-left');
  titleLeft.each(function () {
    var titleOffset = $(this).offset().top;
    if (scrollPos > titleOffset - windowHeight + 100) {
      $(this).addClass('is-active');

  setTimeout(function () {
  $('.js-news-item').each(function () {
  var newsItemOffset = $(this).offset().top;
  if (scrollPos > newsItemOffset - windowHeight + 100) {
  $(this).addClass('is-active');
  }
  });
  }, 700);
  }
  });

  var titleLeft = $('.js-menu-item');
  titleLeft.each(function () {
    var titleOffset = $(this).offset().top;
    if (scrollPos > titleOffset - windowHeight + 100) {
      $(this).addClass('is-active');
    }
  });

  var titleLeft = $('.js-news-item');
  titleLeft.each(function () {
    var titleOffset = $(this).offset().top;
    if (scrollPos > titleOffset - windowHeight + 100) {
      $(this).addClass('is-active');
    }
  });

  var titleLeft = $('.js-news-nav');
  titleLeft.each(function () {
    var titleOffset = $(this).offset().top;
    if (scrollPos > titleOffset - windowHeight + 100) {
      $(this).addClass('is-active');
    }
  });

  var titleLeft = $('.js-common-concept');
  titleLeft.each(function () {
    var titleOffset = $(this).offset().top;
    if (scrollPos > titleOffset - windowHeight + 100) {
      $(this).addClass('is-active');
    }
  });
});

   // 文字数制限関数
   function trimTitle() {
    $('.js-trim-title').each(function() {
        var text = $(this).data('original') || $(this).text(); // 元のテキストを保存
        $(this).data('original', text); // データ属性に元のテキストを保存

        // 画面幅に応じた文字数制限
        var maxLength = window.innerWidth <= 768 ? 40 : 46;

        // 文字数制限の適用
        if (text.length > maxLength) {
            $(this).text(text.substring(0, maxLength) + '...');
        } else {
            $(this).text(text); // 文字数が足りない場合はそのまま表示
        }
    });
}

// 初期表示時に実行
trimTitle();

// リサイズ時にも実行
$(window).resize(function() {
    trimTitle();
});



// document.addEventListener("DOMContentLoaded", function () {
//   const tl = gsap.timeline();

//   tl.to(".opening-bg", { opacity: 1, duration: 1 }) // 背景の間取り図フェードイン
//     .fromTo(".opening-text-1", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5") // 「収益を上げる民泊を」
//     .fromTo(".opening-text-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5") // 「デザイン戦略」
//     .fromTo(".opening-logo", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5") // ロゴ
//     .fromTo(".opening-character", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5") // キャラクター
//     .fromTo(".opening-nice", { x: -50, opacity: 0 }, { x: 0, opacity: 1, y: -20, duration: 0.8, ease: "bounce.out" }, "-=0.5") // NICE!!

//     // 手書きのアニメーション
//     .to(".opening-handwriting path", { strokeDashoffset: 0, duration: 2, ease: "power2.out" }, "-=0.5")

//     // アニメーション後にオープニング画面をフェードアウト
//     .to(".opening-animation", { opacity: 0, duration: 1, onComplete: () => document.querySelector(".opening-animation").remove() });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const stickySection = document.querySelector(".sticky_wrap");
//   const scrollContainer = document.querySelector(".scroll_container");
//   const horizontalScroll = document.querySelector(".horizontal_scroll");

//   if (!stickySection || !scrollContainer || !horizontalScroll) return;

//   // **スクロール範囲を計算**
//   const updateScrollValues = () => {
//       const scrollWidth = horizontalScroll.scrollWidth - window.innerWidth;
//       const containerHeight = scrollWidth + window.innerHeight; // 縦スクロールの合計高さ
//       scrollContainer.style.height = `${containerHeight}px`;
//   };

//   updateScrollValues();
//   window.addEventListener("resize", updateScrollValues);

//   // **スクロール時の動作**
//   window.addEventListener("scroll", () => {
//       const startScroll = scrollContainer.offsetTop;
//       const endScroll = startScroll + (horizontalScroll.scrollWidth - window.innerWidth);
//       const scrollY = window.scrollY;

//       if (scrollY >= startScroll && scrollY <= endScroll) {
//           let progress = (scrollY - startScroll) / (endScroll - startScroll);
//           let translateX = -progress * (horizontalScroll.scrollWidth - window.innerWidth);
//           horizontalScroll.style.transform = `translate3d(${translateX}px, 0, 0)`;
//       }
//   });
// });







