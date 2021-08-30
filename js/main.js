$(window).on("load", function () {
  setTimeout(()=>{
    $(".preloader").fadeOut("fast");
  },500)
});


// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});


$(".menuBtn").click(function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    gsap.to(".navMenu", {
      duration: 0.1,
      display: "flex",
      ease: "expo.in",
    });
    gsap.to(".navBefore", {
      duration: 0.5,
      marginLeft: "0",
      ease: "expo.in",
    });
    gsap.to(".nav", {
      duration: 0.8,
      marginLeft: "0",
      delay: 0.3,
      ease: "expo.in",
    });
    gsap.to(".navigation", {
      duration: 1,
      opacity: "1",
      delay: 0.8,
      ease: "expo.in",
    });
  } else {
    gsap.to(".navigation", {
      duration: 0.4,
      opacity: "0",
      ease: "expo.in",
    });
    gsap.to(".nav", {
      duration: 0.5,
      marginLeft: "100%",
      delay: 0.3,
      ease: "expo.in",
    });
    gsap.to(".navBefore", {
      duration: 0.5,
      marginLeft: "100%",
      delay: 0.8,
      ease: "expo.in",
    });
    gsap.to(".navMenu", {
      duration: 1,
      display: "none",
      delay: 1.3,
      ease: "expo.in",
    });
  }
});

$(".navMenu .navigation a").click(function () {
  gsap.to(".navigation", {
    duration: 0.4,
    opacity: "0",
    ease: "expo.in",
  });
  gsap.to(".nav", {
    duration: 0.5,
    marginLeft: "100%",
    delay: 0.3,
    ease: "expo.in",
  });
  gsap.to(".navBefore", {
    duration: 0.5,
    marginLeft: "100%",
    delay: 0.8,
    ease: "expo.in",
  });
  gsap.to(".navMenu", {
    duration: 1,
    display: "none",
    delay: 1.3,
    ease: "expo.in",
  });
});

/* Particle JS */
particlesJS("particles-js", {
  particles: {
    number: { value: 300, density: { enable: true, value_area: 800 } },
    color: { value: "#fd4d4d" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#fd4d4d",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});


/* Hero Text Animation */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var positiontop = $(document).scrollTop();
  if (positiontop > 0 && positiontop < window.innerWidth * 0.24) {
    positiontop = positiontop - window.innerHeight * 0.1;
    var scrollWidth = (100 * positiontop) / window.innerWidth + 6;
    var scrollWidthY = (100 * positiontop) / window.innerWidth + 6;

    newvalue = -(300 - 97) / (scrollWidth - 160) - 0.55;

    if (scrollWidthY > 18) {
      scrollWidthY = 18;
    } else if (scrollWidthY < 0) {
      scrollWidthY = 2;
    }

    if (scrollWidth < 0) {
      scrollWidth = 0;
    }

    $(".scroll-down").css({ opacity: "0" });
    $(".first-name").css({
      transform:
        "Scale(" +
        newvalue +
        ") translate(" +
        scrollWidth +
        "vw," +
        scrollWidthY +
        "vw)",
    });
    $(".last-name").css({
      transform:
        "Scale(" +
        newvalue +
        ") translate(-" +
        scrollWidth +
        "vw," +
        (scrollWidth + 5) +
        "vw)",
    });
  } else if (positiontop > window.innerWidth * 0.24) {
    $(".first-name").css({
      transform: "Scale(1) translate(28.5vw,22vw)",
      left: "0vw",
    });
    $(".last-name").css({ transform: "Scale(1) translate(-22.5vw,35vw)" });
  } else {
    $(".scroll-down").css({ opacity: "0.5" });
    $(".first-name").css({ transform: "Scale(0.7)", left: "-3vw" });
    $(".last-name").css({ transform: "Scale(0.7)" });
  }
}

/* Horizontal Scroll */
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

var ww = window.innerWidth;

var noSlides = $(".section").length;
var slideWidth = $(".section").width();
var slideContainerWidth = slideWidth * noSlides;

$(document).ready(function () {
  $("meta[name=author]").attr("content", "Harsh Sanklecha");
});

// console.log(noSlides, slideWidth, slideContainerWidth, ww);

TweenLite.set("#lineSVG", { width: slideContainerWidth + ww });

var actionHorizontal = new TimelineMax().to("#slideContainer", 1, {
  x: -slideContainerWidth + slideWidth,
});

var horizontal = createHorizontal();

function createHorizontal() {
  return (
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: 1800,
    })
      .setPin("#js-wrapper")
      .setTween(actionHorizontal)
      // .addIndicators({
      //     colorTrigger: "white",
      //     colorStart: "white",
      //     colorEnd: "white",
      // })
      .addTo(controller)
  );
}
/* Services Scroll */
var skewSetter = gsap.quickSetter(".services-card", "skewY", "deg");
var proxy = { skew: 0 };

ScrollTrigger.create({
  onUpdate: (self) => {
    var skew = self.getVelocity() / -1500;

    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;

      gsap.to(proxy, {
        skew: 0,
        duration: 1,
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

gsap.set(".servuces-card", { transformOrigin: "right center", force3D: true });
