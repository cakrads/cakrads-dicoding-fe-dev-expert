const DrawerInitiator = {
  init({ button, drawer, overlay }) {
    this._button = button;
    this._drawer = drawer;
    this._overlay = overlay;

    this._button.addEventListener('click', (event) => {
      event.stopPropagation();
      this._toggleDrawer();
    });

    this._overlay.addEventListener('click', (event) => {
      event.stopPropagation();
      this._toggleDrawer();
    });
  },

  _toggleDrawer() {
    this._drawer.classList.toggle('open');
    this._overlay.classList.toggle('open');

    if (this._drawer.classList.contains("open")) {
      this._button.innerHTML = '✕';
      this._button.setAttribute("aria-label",
        "click to close navbar drawer");
      this._setDrawerTabIndex(0, true);
      return;
    }

    this._button.innerHTML = '☰';
    this._button.setAttribute("aria-label",
      "click to open and go to the navbar drawer");
    this._setDrawerTabIndex();
  },

  _setDrawerTabIndex(value = -1, autoFocus = false) {
    const listLink = this._drawer.getElementsByTagName("a");
    for (let i = 0; i < listLink.length; i++) {
      if (value === 0 && i === 0 && autoFocus)
        listLink[i].focus();
      listLink[i].setAttribute("tabindex", value);
    }
  },

  _setDrawerWithSize() {
    if (window.innerWidth <= 650)
      this._setDrawerTabIndex();
    else
      this._setDrawerTabIndex(0);
  }
};

export default DrawerInitiator;
