
const elBtnMenu = document.querySelector('#btn-menu');
const elFullOverlay = document.querySelector('#full-overlay');
const elDrawerMenu = document.querySelector('#drawer-menu');

elBtnMenu.addEventListener('click', function (event) {
  event.stopPropagation();
  _toggleDrawer();
});

elFullOverlay.addEventListener('click', function (event) {
  _toggleDrawer();
});

function _toggleDrawer() {
  drawer.classList.toggle('open');
  elFullOverlay.classList.toggle('open');

  if (drawer.classList.contains("open")) {
    elBtnMenu.innerHTML = '✕';
    elBtnMenu.setAttribute("aria-label",
      "click to close navbar drawer");
    setDrawerTabIndex(0, true);
    return;
  }

  elBtnMenu.innerHTML = '☰';
  elBtnMenu.setAttribute("aria-label",
    "click to open and go to the navbar drawer");
  setDrawerTabIndex();
}

function setDrawerTabIndex(value = -1, autoFocus = false) {
  const listitems = elDrawerMenu.getElementsByTagName("a");
  for (i = 0; i < listitems.length; i++) {
    if (value === 0 && i === 0 && autoFocus)
      listitems[i].focus();
    listitems[i].setAttribute("tabindex", value);
  }
}

window.addEventListener('resize', setDrawerWithSize);

function setDrawerWithSize() {
  if (window.innerWidth <= 650)
    setDrawerTabIndex();
  else
    setDrawerTabIndex(0);
}

setDrawerWithSize();