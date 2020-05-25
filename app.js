const tl = new TimelineMax();

// Overlays
tl.to(".one", {
  left: "-100%",
  delay: 0.1,
});

tl.to(".two", {
  left: "-100%",
  delay: 0.3,
});

tl.to(".three", {
  left: "-100%",
  delay: 0.6,
});

// Header
tl.to(".header", {
  ease: Power4.easeInOut,
  height: "100vh",
});

// NAvbar
tl.staggerFrom(
  "nav ul li ",
  1,
  {
    y: -100,
    ease: Power4.easeInOut,
    opacity: 0,
  },
  0.2
);

// Social Media
tl.staggerFrom(
  ".social-media i",
  1,
  {
    x: 100,
    ease: Expo.easeOut,
    opacity: 0,
  },
  0.2
);

// Logo
tl.from(".logo", {
  opacity: 0,
  x: -100,
  ease: Power4.easeInOut,
});

// Header Content
tl.from(".left-container h1", {
  opacity: 0,
  x: -100,
  ease: Power4.easeInOut,
});

tl.from(".right-container h1", {
  opacity: 0,
  x: 100,
  delay: 0.2,
  ease: Power4.easeInOut,
});

// Navbar Toggler
tl.from(".navbar-toggler", {
  ease: Power4.easeInOut,
  opacity: 0,
  x: 100,
});

$(".navbar-toggler").on("click", () => {
  $("nav ul").toggleClass("showing");
});
