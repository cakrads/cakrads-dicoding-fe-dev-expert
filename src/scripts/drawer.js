
const btnMenu = document.querySelector('#btn-menu');
const fullOverlay = document.querySelector('#full-overlay');

btnMenu.addEventListener('click', function (event) {
  setFullOverlay(true);
  drawer.classList.toggle('open');
  event.stopPropagation();
  if (drawer.classList.contains("open"))
    btnMenu.innerHTML = '✕';
  else
    btnMenu.innerHTML = '☰';
});

fullOverlay.addEventListener('click', function (event) {
  drawer.classList.remove('open');
  btnMenu.innerHTML = '☰';
  setFullOverlay(false);
});

function setFullOverlay(show = false) {
  fullOverlay.classList.toggle('open');
}