
const elBtnMenu = document.querySelector('#btn-menu');
const elFullOverlay = document.querySelector('#full-overlay');
const elDrawerMenu = document.querySelector('#drawer-menu');

elBtnMenu.addEventListener('click', function (event) {
  showElFullOverlay(true);
  drawer.classList.toggle('open');
  event.stopPropagation();
  if (drawer.classList.contains("open")) {
    elBtnMenu.innerHTML = '✕';
    setDrawerTabIndex(0);
    return;
  }

  setDrawerTabIndex();
  elBtnMenu.innerHTML = '☰';
});

elFullOverlay.addEventListener('click', function (event) {
  drawer.classList.remove('open');
  elBtnMenu.innerHTML = '☰';
  showElFullOverlay(false);
});

function showElFullOverlay(show = false) {
  elFullOverlay.classList.toggle('open');
}

function setDrawerTabIndex(value = -1) {
  const listitems = elDrawerMenu.getElementsByTagName("a");
  for (i = 0; i < listitems.length; i++) {
    listitems[i].setAttribute("tabindex", value);
  }
}
