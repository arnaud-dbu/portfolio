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

    // isSmall: '(min-width: 414px)',
    // isMedium: '(min-width: 810px)',
    // isLarge: 'min-width: 1250px)',
    // isExtraLarge: '(min-width: 1920px)',
  },
  animateBg() {
    let tl = gsap.timeline();
    tl
    .to('.logo-bg', {
      opacity: 0.25,
      scrollTrigger: 
      {
        trigger: ".about__title",
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    .to('.logo-bg', {
      opacity: 0,
      scrollTrigger: 
      {
        trigger: ".projects__title",
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  },
  animateHero() {

    // let mm = gsap.matchMedia();

    // mm.add('(min-width: 1250px)', () => {

    //   gsap.from('header', {
    //     x: "-20vw",
    //     duration: 1,
    //     ease: "power4.out"
    //   })
    // })


    // tl.from('.logo-bg__shape', {
    //   scale: 3,
    //   duration: 4,
    //   ease: "power3.out"
    // })

  },
  animateTitles() {
    const $primaryTitles = document.querySelectorAll('.title--secondary');

    $primaryTitles.forEach((title) => {
      gsap.from(title, {
        autoAlpha: 0,
        duration: 1,
        y: "5vh",
        scrollTrigger: 
        {
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
    
    const $project = document.querySelectorAll('.project');
    
    // $project.forEach((project) => {
    //   fadeInFromBottom(project, project);
    // })




  },
  animateFooter() {
    gsap.set('.footer__content', {
      x: "120vw"
    })

    gsap.to('.footer__content', {
      x: "-170vw",
      duration: 10,
      repeat: -1
    })
  },
  animateMobileNav() {

  }
}

animations.init();