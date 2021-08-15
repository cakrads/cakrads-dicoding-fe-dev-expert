
const elBtnMenu = document.querySelector('#btn-menu');
const elFullOverlay = document.querySelector('#full-overlay');
const elDrawerMenu = document.querySelector('#drawer-menu');

elBtnMenu.addEventListener('click', function (event) {
  event.stopPropagation();
  _activateDrawer();
});

elFullOverlay.addEventListener('click', function (event) {
  _activateDrawer();
});

function _activateDrawer() {
  drawer.classList.toggle('open');
  elFullOverlay.classList.toggle('open');

  if (drawer.classList.contains("open")) {
    elBtnMenu.innerHTML = '✕';
    setDrawerTabIndex(0);
    return;
  }

  elBtnMenu.innerHTML = '☰';
  setDrawerTabIndex();
}

function setDrawerTabIndex(value = -1) {
  const listitems = elDrawerMenu.getElementsByTagName("a");
  for (i = 0; i < listitems.length; i++) {
    if (value === 0 && i === 0)
      listitems[i].focus();
    listitems[i].setAttribute("tabindex", value);
  }
}
