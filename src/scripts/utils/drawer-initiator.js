const DrawerInitiator = {
  init({ button, drawer, overlay }) {
    this.button = button;
    this.drawer = drawer;
    this.overlay = overlay;

    this.button.addEventListener('click', (event) => {
      event.stopPropagation();
      this.toggleDrawer();
    });

    this.overlay.addEventListener('click', (event) => {
      event.stopPropagation();
      this.toggleDrawer();
    });
  },

  toggleDrawer() {
    this.drawer.classList.toggle('open');
    this.overlay.classList.toggle('open');

    if (this.drawer.classList.contains('open')) {
      this.button.innerHTML = '✕';
      this.button.setAttribute('aria-label',
        'click to close navbar drawer');
      this.setDrawerTabIndex(0, true);
      return;
    }

    this.button.innerHTML = '☰';
    this.button.setAttribute('aria-label',
      'click to open and go to the navbar drawer');
    this.setDrawerTabIndex();
  },

  setDrawerTabIndex(value = -1, autoFocus = false) {
    const listLink = this.drawer.getElementsByTagName('a');

    for (let index = 0; index < listLink.length; index += 1) {
      if (value === 0 && index === 0 && autoFocus) {
        listLink[index].focus();
      }

      listLink[index].setAttribute('tabindex', value);
    }
  },

  setDrawerWithSize() {
    if (window.innerWidth <= 650) {
      this.setDrawerTabIndex();
    } else {
      this.setDrawerTabIndex(0);
    }
  },
};

export default DrawerInitiator;
