jQuery(document).ready(function () {
  jQuery(window).on("load", function () {
    if (!window.sessionStorage.getItem("preloaderIsShown")) {
      setTimeout(function () {
        jQuery(".animation__wrapper").addClass("close");
        window.sessionStorage.setItem("preloaderIsShown", true);
        jQuery("body").removeClass("noscroll");
      }, 4000);
    } else {
      jQuery(".animation__wrapper").addClass("close");
      jQuery("body").removeClass("noscroll");
    }
  });

  //////////////////////слайдер///////////////////////
  jQuery(".mission__slider").addClass("owl-carousel owl-theme");
  jQuery(".mission__slider").owlCarousel({
    items: 2,
    dots: false,
    nav: false,
    margin: 30,
    responsive: {
      0: {
        items: 1.2,
        margin: 10,
        center: true,
      },
      600: {
        items: 2,
        margin: 30,
        center: false,
      },
    },
  });

  ///////////////////////////попап/////////////////////////////////////////////////////////
  jQuery(".popup-video").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-zoom-in",
    callbacks: {
      open: function () {
        jQuery("body").addClass("noscroll");
      },
      close: function () {
        jQuery("body").removeClass("noscroll");
      },
    },

    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",

          id: "v=",

          src: "http://www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "http://player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "http://maps.google.",
          src: "%id%&output=embed",
        },
      },

      srcAction: "iframe_src",
    },
  });

  ///////////////////плавний скролл//////////////////////////////
  jQuery("._link-btn, .header__menu-btn").on("click", function (event) {
    event.preventDefault();
    var id = jQuery(this).attr("href"),
      top = jQuery(id).offset().top;
    jQuery("body,html").animate({ scrollTop: top - 0 }, 800);
  });

  /////////////////скрити меню при скролі вниз і відобразити при  скролі вгору////////////////////
  let g_top = 0;
  jQuery(window).scroll(function () {
    if (window.scrollY > window.innerHeight / 2) {
      let top = jQuery(this).scrollTop();
      if (top > g_top) {
        jQuery(".header").addClass("fadeOut");
      } else {
        jQuery(".header").removeClass("fadeOut");
      }
      g_top = top;
    }
  });
});

////////////////////////////////////////////////////////////////////
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top - 100;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_js_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_js_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 200);
}

jQuery(document).ready(function () {});

jQuery(document).ready(function () {
  jQuery(".pack__btn-filter").click(function () {
    jQuery(".pack__btn-filter").removeClass("_active-btn");
    jQuery(this).addClass("_active-btn");

    if (jQuery(this).hasClass("pack__btn-filter-start")) {
      jQuery(this).parents(".pack__wrapper").find(".pack__start").show();
      jQuery(this).parents(".pack__wrapper").find(".pack__pro").hide();
    }

    if (jQuery(this).hasClass("pack__btn-filter-pro")) {
      jQuery(this).parents(".pack__wrapper").find(".pack__start").hide();
      jQuery(this).parents(".pack__wrapper").find(".pack__pro").show();
    }
  });
});

///////////////////////////////////////////////////
//paralax

$(".parallax").each(function () {
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg() {
    var speed = img.data("speed");
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();
    var winBottom = winY + winH;

    if (winBottom > imgY && winY < imgY + parentH) {
      var imgBottom = (winBottom - imgY) * speed;
      var imgTop = winH + parentH;
      var imgPercent = (imgBottom / imgTop) * 300 + (50 - speed * 50);
    }
    img.css({
      marginTop: "-" + imgPercent + "px",
    });
  }

  $(document).on({
    scroll: function () {
      parallaxImg();
    },
    ready: function () {
      parallaxImg();
    },
  });
});

////////////////анімація покадрова при скролі///////////////////
jQuery(document).ready(function () {
  if (jQuery(".filter-page").length > 0) {
    const filterPageWrapper = document.querySelector(".filter-page__baner");
    const filterPagevideo = filterPageWrapper.querySelector(
      ".filter-page__baner-video"
    );
    const filterPagetext1 = filterPageWrapper.querySelector(
      ".filter-page__baner-content-1"
    );
    const filterPagetext2 = filterPageWrapper.querySelector(
      ".filter-page__baner-content-2"
    );

    const filterPagecontroller = new ScrollMagic.Controller();

    let filterPagescene = new ScrollMagic.Scene({
      duration: 1500,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
    })
      .setPin(filterPageWrapper)
      .addTo(filterPagecontroller);

    const textAnim1 = TweenMax.fromTo(
      filterPagetext1,
      0.1,
      { opacity: 1 },
      { opacity: 0 }
    );
    const textAnim2 = TweenMax.fromTo(
      filterPagetext2,
      0.3,
      { opacity: 0 },
      { opacity: 1 }
    );

    let filterPagescene1 = new ScrollMagic.Scene({
      duration: "50px",
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      //  offset: "200px"
    })
      .setTween(textAnim1)
      .addTo(filterPagecontroller);

    let filterPagescene2 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      offset: "50px",
    })
      .on("enter", function () {
        filterPagevideo.classList.add("visible");
      })
      .on("leave", function () {
        filterPagevideo.classList.remove("visible");
      })
      .addTo(filterPagecontroller);

    let filterPagescene3 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      offset: "300px",
    })
      .setTween(textAnim2)
      .addTo(filterPagecontroller);

    let filterPagescene4 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      offset: "500px",
    })
      .on("enter", function () {
        filterPagetext2.classList.add("visible-1-text");
      })
      .on("leave", function () {
        filterPagetext2.classList.remove("visible-1-text");
      })
      .addTo(filterPagecontroller);

    let filterPagescene5 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      offset: "700px",
    })
      .on("enter", function () {
        filterPagetext2.classList.add("visible-2-text");
      })
      .on("leave", function () {
        filterPagetext2.classList.remove("visible-2-text");
      })
      .addTo(filterPagecontroller);

    let filterPagescene6 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      offset: "1000px",
    })
      .on("enter", function () {
        filterPagetext2.classList.add("visible-3-text");
      })
      .on("leave", function () {
        filterPagetext2.classList.remove("visible-3-text");
      })
      .addTo(filterPagecontroller);

    let filterPagescene7 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: filterPageWrapper,
      triggerHook: 0,
      offset: "1300px",
    })
      .on("enter", function () {
        filterPagetext2.classList.add("visible-4-text");
      })
      .on("leave", function () {
        filterPagetext2.classList.remove("visible-4-text");
      })
      .addTo(filterPagecontroller);

    //video animation

    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    filterPagescene.on("update", (e) => {
      scrollpos = e.scrollPos / 100;
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;

      filterPagevideo.currentTime = delay;
    }, 33.3);
  }
});
