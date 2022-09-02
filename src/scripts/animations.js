const animations = {
  init() {
    this.cacheElements();
    this.generateUI();
  },
  cacheElements() {
    this.$name = document.querySelector('.hero__name');
  },
  generateUI() {
    this.animateHero();
    this.animateTitles();

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
    gsap.set('.title',{
      x: '200vw',
      opacity: 0
    }) 

    gsap.to('.title', {
      x: '-95vw',
      opacity: 1,

      scrollTrigger: {
        trigger: '.title',
        scrub: true,
        start: 'top bottom',
        end: 'bottom top'
      }
    },
    )

  }
}

animations.init();