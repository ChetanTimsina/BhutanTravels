const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: true 
};

const revealElements = (elements, options) => {
  ScrollReveal().reveal(elements, { ...scrollRevealOption, ...options });
};

revealElements(".header__container h1");
revealElements(".header__container h4", { delay: 500 });
revealElements(".header__container .btn", { delay: 1000 });

revealElements(".about__container .section__header");
revealElements(".about__container .section__subheader", { delay: 500 });
revealElements(".about__container .about__flex", { delay: 1000 });
revealElements(".about__container .btn", { delay: 1500 });


revealElements(".discover__card", { interval: 500 });
revealElements(".discover__card__content", { interval: 500, delay: 200 });

revealElements(".blogs__card", { interval: 400 });
revealElements(".journals__card", { interval: 400 });


revealElements(".hero p", { delay: 300 });

revealElements(".gallery__container .section__header");
revealElements(".gallery__container .section__subheader", { delay: 500 });
revealElements(".gallery__card", { interval: 300 });
revealElements(".gallery__content", { delay: 200, interval: 300 });

revealElements(".contact__col h4", { delay: 200 });
revealElements(".contact__col p", { delay: 400 });
revealElements(".contact__card", { interval: 400 });