////////////////анімація покадрова при скролі///////////////////
jQuery(document).ready(function () {
  if (jQuery(".home-page").length > 0) {
    const banerWrapper = document.querySelector(".baner__wrapper");
    const video = banerWrapper.querySelector(".baner__image");
    const text1 = banerWrapper.querySelector(".baner__content-1");
    const text2 = banerWrapper.querySelector(".baner__content-2");

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      duration: "1300px",
      triggerElement: banerWrapper,
      triggerHook: 0,
    })
      .setPin(banerWrapper)
      .addTo(controller);

    const textAnim1 = TweenMax.fromTo(
      text1,
      0.8,
      { opacity: 1 },
      { opacity: 0 }
    );
    const textAnim2 = TweenMax.fromTo(
      text2,
      0.8,
      { opacity: 0 },
      { opacity: 1 }
    );

    let scene2 = new ScrollMagic.Scene({
      duration: "0px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "200px",
    })
      .setTween(textAnim1)
      .addTo(controller);

    let scene3 = new ScrollMagic.Scene({
      duration: "0px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "200px",
    })
      .on("enter", function () {
        video.classList.add("visible");
      })
      .on("leave", function () {
        video.classList.remove("visible");
      })
      .addTo(controller);

    let scene4 = new ScrollMagic.Scene({
      duration: "0px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "300px",
    })
      .setTween(textAnim2)
      .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
      duration: "200px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "500px",
    })
      .setClassToggle("#baner__item-text1", "invisible")
      .on("enter", function () {
        document.querySelector("#baner__item-text1").classList.add("visible");
      })
      .on("leave", function () {
        document
          .querySelector("#baner__item-text1")
          .classList.remove("visible");
      })
      .addTo(controller);

    let scene6 = new ScrollMagic.Scene({
      duration: "200px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "700px",
    })
      .setClassToggle("#baner__item-text1", "invisible")
      .on("enter", function () {
        document.querySelector("#baner__item-text2").classList.add("visible");
      })
      .on("leave", function () {
        document
          .querySelector("#baner__item-text2")
          .classList.remove("visible");
      })
      .addTo(controller);

    let scene7 = new ScrollMagic.Scene({
      duration: "200px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "900px",
    })
      .setClassToggle("#baner__item-text1", "invisible")
      .on("enter", function () {
        document.querySelector("#baner__item-text3").classList.add("visible");
      })
      .on("leave", function () {
        document
          .querySelector("#baner__item-text3")
          .classList.remove("visible");
      })
      .addTo(controller);

    let scene8 = new ScrollMagic.Scene({
      duration: "0px",
      triggerElement: banerWrapper,
      triggerHook: 0,
      offset: "1100px",
    })
      .setClassToggle("#baner__item-text1", "invisible")
      .on("enter", function () {
        document.querySelector("#baner__item-text4").classList.add("visible");
      })
      .on("leave", function () {
        document
          .querySelector("#baner__item-text4")
          .classList.remove("visible");
      })
      .addTo(controller);
    ////////////////анімація покадрова при скролі///////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const choiceWrapper = document.querySelector(".choice");
    const choicevideo = choiceWrapper.querySelector(".choice-video");
    const choiceWrapperTop = offset(choiceWrapper).top;

    const choicecontroller = new ScrollMagic.Controller();

    let choicescene = new ScrollMagic.Scene({
      duration: 1600,
      triggerElement: choiceWrapper,
      triggerHook: 0,
    })
      .setPin(choiceWrapper)
      .addTo(choicecontroller);

    let choicescene2 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: choiceWrapper,
      triggerHook: 0,
      offset: "50px",
    })
      .on("enter", function () {
        choicevideo.classList.add("visible");
      })
      .on("leave", function () {
        choicevideo.classList.remove("visible");
      })
      .addTo(choicecontroller);

    let choicescene3 = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: choiceWrapper,
      triggerHook: 0,
      offset: "1500px",
    })
      .on("enter", function () {
        choicevideo.classList.add("live-block");
      })
      .on("leave", function () {
        choicevideo.classList.remove("live-block");
      })
      .addTo(choicecontroller);

    //video animation

    let choiceaccelamount = 0.1;
    let choicescrollpos = 0;
    let choicedelay = 0;

    choicescene.on("update", (e) => {
      choicescrollpos = (e.scrollPos - choiceWrapperTop) / 200;
    });

    setInterval(() => {
      choicedelay += (choicescrollpos - choicedelay) * choiceaccelamount;

      choicevideo.currentTime = choicedelay;
    }, 33.3);
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    //////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////анімація покадрова при скролі///////////////////////////////////////////////////////////////////////////

    const abouteWrapper = document.querySelector(".about__wrapper");

    const controllerAbout = new ScrollMagic.Controller();

    const sceneAbout = new ScrollMagic.Scene({
      duration: "1500px",
      triggerElement: abouteWrapper,
      triggerHook: 0,
    })
      .on("enter", function () {
        document.querySelector(".about").classList.remove("live-block");
      })
      .on("leave", function () {
        document.querySelector(".about").classList.add("live-block");
      })
      .setPin(abouteWrapper)
      .addTo(controllerAbout);

    let sceneAbout1 = new ScrollMagic.Scene({
      duration: "0px",
      triggerElement: abouteWrapper,
      triggerHook: 0,
      offset: "5px",
    })
      .on("enter", function () {
        document
          .querySelector(".about__content--block")
          .classList.add("visible--1");
        document.querySelector(".about__image--1").classList.add("visible");
      })
      .on("leave", function () {
        document
          .querySelector(".about__content--block")
          .classList.remove("visible--1");
        document.querySelector(".about__image--1").classList.remove("visible");
      })
      .addTo(controllerAbout);

    let sceneAbout2 = new ScrollMagic.Scene({
      duration: "500px",
      triggerElement: abouteWrapper,
      triggerHook: 0,
      offset: "500px",
    })
      .on("enter", function () {
        document.querySelector(".about").classList.add("bcg--2");

        document
          .querySelector(".about__content--block")
          .classList.add("visible--2");
        document.querySelector(".about__image--2").classList.add("visible");
      })
      .on("leave", function () {
        document.querySelector(".about").classList.remove("bcg--2");

        document
          .querySelector(".about__content--block")
          .classList.remove("visible--2");
        document.querySelector(".about__image--2").classList.remove("visible");
      })
      .setClassToggle(".about__image--1", "invisible")
      .addTo(controllerAbout);

    let sceneAbout3 = new ScrollMagic.Scene({
      duration: "0px",
      triggerElement: abouteWrapper,
      triggerHook: 0,
      offset: "1000px",
    })
      .on("enter", function () {
        document.querySelector(".about").classList.add("bcg--2");

        document
          .querySelector(".about__content--block")
          .classList.add("visible--3");
        document.querySelector(".about__image--3").classList.add("visible");
      })
      .on("leave", function () {
        document.querySelector(".about").classList.remove("bcg--2");

        document
          .querySelector(".about__content--block")
          .classList.remove("visible--3");
        document.querySelector(".about__image--3").classList.remove("visible");

        jQuery(document).ready(function (jQuery) {
          var g_top = 0;
          jQuery(window).scroll(function () {
            if (window.scrollY > window.innerHeight / 2) {
              var top = jQuery(this).scrollTop();
              if (top > g_top) {
                document.querySelector(".about").classList.remove("live-block");
              } else {
                document.querySelector(".about").classList.add("live-block");
              }
              g_top = top;
            }
          });
        });
      })
      .setClassToggle(".about__image--1", "invisible")
      .addTo(controllerAbout);
  }
});
