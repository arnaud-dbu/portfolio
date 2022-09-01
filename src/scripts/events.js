const events = {
  init() {
    this.cacheElements();
    this.generateUI();
  },
  cacheElements() {
    this.$hamburgerBtn = document.querySelector('.header__hamburger');
    this.$closeBtn = document.querySelector('.nav__close');
    this.$mobileNav = document.querySelector('.nav__mobile');
  },
  generateUI() {
    this.generateMobileNavigation();
  },
  generateMobileNavigation() {
    this.$hamburgerBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.$mobileNav.classList.remove('js-hidden');
    });
    
    this.$closeBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.$mobileNav.classList.add('js-hidden');
    })
  }
}

events.init();