const animations = {
  init() {
    this.cacheElements();
    this.generateUI();
  },
  cacheElements() {
    this.$name = document.querySelector('.hero__name');
    this.$primaryTitles = document.querySelectorAll('.title-primary');
    this.$secondaryTitles = document.querySelectorAll('.title-secondary');
  },
  generateUI() {
    this.animateBg();
    this.animateHero();
    this.animateTitles();
    this.fadeInFromBottomAnimation();
    this.animateMobileNav();
  },
  animateBg() {
    let tl = gsap.timeline();
    tl
      .to('.logo-bg', {
        opacity: 0.5,
        scale: 0.7,
        filter: "blur(0.2rem)",
        scrollTrigger: {
          trigger: ".about__title",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
      .set('logo-bg', {
        opacity: 0.25
      })
      .to('.logo-bg', {
        opacity: 0,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".projects__title",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
  },
  animateHero() {
    let tl = gsap.timeline();

    tl
      .from('.SlideFromTopAnimation', {
        y: '-20vh',
        duration: .5,
        stagger: 0.07,
        ease: "power2.out",
      })
      .to('.cursor', {
        opacity: 0,
        ease: 'Power4.easeOut',
        repeat: -1,
        onComplete: () => this.animateScrollEl()
      }, '<-0.75')
      .to('.text', {
        text: {
          value: 'I design and code beautiful simple things, and I love what I do'
        },
        duration: 5,
        delay: 1,
        ease: 'none'
      })
      .to('.hero .btn', {
        opacity: 1,
        duration: 0.5,
        delay: .5,
        ease: "power2.out"
      })
  },
  animateTitles() {
    const $primaryTitles = document.querySelectorAll('.title--secondary');

    $primaryTitles.forEach((title) => {
      gsap.from(title, {
        autoAlpha: 0,
        duration: 1,
        y: "5vh",
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        }
      }, )
    })
  },
  fadeInFromBottomAnimation() {

    const fadeInFromBottom = (target, trigger) => {
      gsap.from(target, {
        y: "5vh",
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          trigger: trigger,
          start: 'top 85%',
        }
      })
    }

    fadeInFromBottom('.about__content', '.about__content');
    fadeInFromBottom('.skills__bg', '.skills__content');
    fadeInFromBottom('.projects__content', '.projects__content');

    gsap.from('.skill', {
      y: "10vh",
      opacity: 0,
      duration: 1,
      stagger: .1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 85%',
      }
    })
  },
}
animations.init();