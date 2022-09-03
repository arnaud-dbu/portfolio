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
    this.animateHero();
    this.animateTitles();
    this.animateAbout();
    this.animateFooter();

    // isSmall: '(min-width: 414px)',
    // isMedium: '(min-width: 810px)',
    // isLarge: 'min-width: 1250px)',
    // isExtraLarge: '(min-width: 1920px)',
  },
  animateHero() {

    let mm = gsap.matchMedia();

    mm.add('(min-width: 1250px)', () => {

      gsap.from('header', {
        x: "-20vw",
        duration: 1,
        ease: "power4.out"
      })
    })

    // gsap.to('.hero', {
    //   opacity: 0,
    //   scrollTrigger: {
    //     end: 'bottom 20%',
    //     trigger: '.title',
    //     scrub: true
    //   }
    // })

    gsap.from('.hero__shapes', {
      x: "50vw",
      opacity: 0,
      duration: 12,
      ease: "power4.out"
    })

    gsap.from('.hero__firstname', {
      x: '5vw',
      duration: 1,
      opacity: 0,
      ease: "power1.out"
    })

    gsap.from('.hero__lastname', {
      x: '-1vw',
      duration: 1,
      opacity: 0,
      ease: "power1.out"
    })
  },
  animateTitles() {
    const $primaryTitles = document.querySelectorAll('.title-primary');

    $primaryTitles.forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        duration: 1,
        y: "5vh",
        scrollTrigger: 
        {
          trigger: title,
          start: 'top 85%',
        }
      }, )
    })

  
    // Title Secondary

    // this.$secondaryTitles.forEach(title => {
    //   gsap.from(title, {
    //     y: '10vw',
    //     opacity: 0,
  
    //     scrollTrigger: {
    //       trigger: title,
    //       start: 'top bottom',
    //       end: 'bottom top',
    //     }
    //   }, )
    // }) 
  },
  animateAbout() {
    const fadeInFromBottom = (target, trigger) => {
      gsap.from(target, {
        y: "5vh",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: trigger,
          start: 'top 85%',
        }
      })
    }

    fadeInFromBottom('.about__content', '.about__content');
    fadeInFromBottom('.skills__bg', '.skills__bg');
    
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
  }
}

animations.init();