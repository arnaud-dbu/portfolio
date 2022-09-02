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

    gsap.to('.hero', {
      opacity: 0,
      scrollTrigger: {
        end: 'bottom 20%',
        trigger: '.title',
        scrub: true
      }
    })

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
    
    // About Title


    this.$primaryTitles.forEach(title => {
      
      gsap.set(title, {
        x: '200vw',
        opacity: 0
      })
  
      gsap.to(title, {
        x: '-95vw',
        opacity: 1,
        scrollTrigger: 
        {
          trigger: title,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top'
        }
      }, )
    })

    // Title Secondary

    this.$secondaryTitles.forEach(title => {
      gsap.from(title, {
        y: '10vw',
        opacity: 0,
  
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'bottom top',
        }
      }, )
    }) 
  },
  animateAbout() {
    gsap.from('.about__content', {
      y: "10vh",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.about__content',
        start: 'top bottom',
      }
    })

    gsap.from('.skill', {
      y: "5vh",
      opacity: 0,
      duration: 1,
      stagger: .25,
      ease: "power4.out",
      scrollTrigger: {
        trigger: '.skills',
        start: 'top 65%',
      }
    })


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