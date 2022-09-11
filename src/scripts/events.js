const events = {
  init() {
    this.cacheElements();
    this.setHeight();
    this.generateUI();
  },
  cacheElements() {
    this.$hamburgerBtn = document.querySelector('.header__hamburger');
    this.$mobileNavCloseBtn = document.querySelector('.nav-mobile__close');
    this.$mobileNav = document.querySelector('.nav-mobile');
    this.$mobileNavLink = document.querySelectorAll('.nav-mobile__list-item');
  },
  generateUI() {
    this.generateMobileNavigation();
  },
  generateMobileNavigation() {
    this.$hamburgerBtn.addEventListener('click', async (ev) => {
      ev.preventDefault();
      await this.$mobileNav.classList.remove('js-hidden');

      await gsap.set('.nav-mobile', {
        y: '-100vh'
      })
      
      await gsap.to('.nav-mobile', {
        y: '0',
        duration: .5,
        ease: "power4.out"
      })
    });
    
    this.$mobileNavCloseBtn.addEventListener('click', async (ev) => {
      ev.preventDefault();

      await gsap.to('.nav-mobile', {
        y: '-100vh',
        duration: .5,
        ease: "power4.in"
      })

      await this.$mobileNav.classList.add('js-hidden');
    })

    this.$mobileNavLink.forEach(link => {
      link.addEventListener('click', async (ev) => {
        this.$mobileNav.classList.add('js-hidden');
      }) 
    });
  }, 
  setHeight() {
    const documentHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
     }
     window.addEventListener('resize', documentHeight)
     documentHeight()
  }
}

events.init();