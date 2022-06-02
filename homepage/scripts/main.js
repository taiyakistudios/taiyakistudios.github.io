gsap.set(".bg--desktop .el", { scale: 0 });

gsap
  .timeline()
  .to("body", { overflow: "hidden" })
  .from(
    ".primary__title, .primary__text, .primary__form",
    0.6,
    {
      opacity: 0,
      y: -50,
      ease: Expo.easeInOut,
      delay: 0.1,
      stagger: 0.2,
    },
    0
  )
  .from(
    ".header",
    1,
    {
      opacity: 0,
      y: -100,
      ease: Expo.easeInOut,
      delay: 0.6,
      stagger: 0.05,
    },
    0.6
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
    0.6
  )
  .to(
    ".bg--desktop .el",
    1,
    {
      scale: 1,
      ease: Expo.easeInOut,
      delay: 1,
      stagger: 0.4,
    },
    1
  )
  .from(
    ".footer",
    1,
    {
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut,
      delay: 0.6,
    },
    0.6
  )
  .to("body", { overflow: "" });
