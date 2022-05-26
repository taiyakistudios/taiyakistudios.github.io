function init(){
  gsap.timeline()
  .to("body", { overflow: "hidden" })
  .from(
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
  )
  .from(
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
  )
  .from(
    ".bg--mobile", 
    1,
    {
      opacity: 0, 
      y: -100,
      ease: Expo.easeInOut,
      delay: 0.2,
    },
    0.1
  )
  .from(
    ".bg--desktop", 
    1,
    {
      opacity: 0, 
      y: 100,
      ease: Expo.easeInOut,
      delay: 1,
    },
    0.8
  )
  .from(
    ".footer", 
    1,
    {
      opacity: 0, 
      y: 50,
      ease: Expo.easeInOut,
      delay: .6,
    },
    0.8
  )
  .to("body", { overflow: "" });
}

window.addEventListener("load", init)