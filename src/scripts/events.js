const events = {
  init() {
    this.cacheElements();
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
    // this.$hamburgerBtn.addEventListener('click', async (ev) => {
    //   ev.preventDefault();
    //   await this.$mobileNav.classList.remove('js-hidden');
    // });

    // this.$mobileNavCloseBtn.addEventListener('click', async (ev) => {
    //   ev.preventDefault();

    //   await this.$mobileNav.classList.add('js-hidden');
    // })



    let $menuBtn = document.getElementById('header__hamburger');
    const $menuBtnContainer = document.querySelector('.header__hamburger-container');
    let state = 'pause';

    let animation = bodymovin.loadAnimation({
      container: $menuBtn,
      path: './src/assets/json/menu.json',
      renderer: 'svg',
      loop: false,
      autoplay: false,
    });

    $menuBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (state === 'pause') {
        animation.playSegments([1, 20], true);
        state = 'play';

        gsap.to($menuBtnContainer, {
          scale: 60,
          duration: 1.5,
          ease: "power4.out"
        })

        setTimeout(() => {
          this.$mobileNav.classList.remove('js-hidden');
        }, 150);

      } else {
        animation.playSegments([20, 1], true);
        state = 'pause';
        
        this.$mobileNav.classList.add('js-hidden');
        
        gsap.to($menuBtnContainer, {
          scale: 1,
          duration: .35,
          ease: "power4.in"
        })
      }
    });

    this.$mobileNavLink.forEach(link => {
      link.addEventListener('click', (ev) => {
        animation.playSegments([20, 1], true);
        state = 'pause';
        
        gsap.to($menuBtnContainer, {
            scale: 1,
            duration: .35,
            ease: "power4.in"
          })

          this.$mobileNav.classList.add('js-hidden');
        
      }) 
    });



  },
}

events.init();