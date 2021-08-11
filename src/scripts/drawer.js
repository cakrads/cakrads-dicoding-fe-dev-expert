
const elBtnMenu = document.querySelector('#btn-menu');
const elFullOverlay = document.querySelector('#full-overlay');

elBtnMenu.addEventListener('click', function (event) {
  setElFullOverlay(true);
  drawer.classList.toggle('open');
  event.stopPropagation();
  if (drawer.classList.contains("open"))
    elBtnMenu.innerHTML = '✕';
  else
    elBtnMenu.innerHTML = '☰';
});

elFullOverlay.addEventListener('click', function (event) {
  drawer.classList.remove('open');
  elBtnMenu.innerHTML = '☰';
  setElFullOverlay(false);
});

function showElFullOverlay(show = false) {
  fullOverlay.classList.toggle('open');
}