function init(){
  // gsap.from(
  //   ".header__logo, .header__social > a", 
  //   {
  //     opacity: 0, 
  //     y: 50,
  //     ease: Expo.easeInOut,
  //     // delay: 0.4,
  //     // stagger: 0.05
  //   }
  // );

  gsap.from(
    ".header",
    1,
    {
      opacity: 0, 
      y: -100,
      ease: Expo.easeInOut,
      delay: 0.6,
      stagger: 0.05
    },
    0.8
  );

  gsap.from(
    ".primary__title, .primary__text, .primary__form", 
    1,
    {
      opacity: 0, 
      y: -50,
      ease: Expo.easeInOut,
      delay: 0.4,
      stagger: 0.2
    },
    0.1
  );


  gsap.from(
    ".bg--mobile", 
    1,
    {
      opacity: 0, 
      y: -100,
      ease: Expo.easeInOut,
      delay: 0.2,
    },
    0.1
  );

  gsap.from(
    ".bg--desktop", 
    1,
    {
      opacity: 0, 
      y: 100,
      ease: Expo.easeInOut,
      delay: 1,
    },
    0.8
  );

  gsap.from(
    ".footer", 
    1,
    {
      opacity: 0, 
      y: 50,
      ease: Expo.easeInOut,
      delay: .6,
    },
    0.8
  );
}

window.addEventListener("load", init)
