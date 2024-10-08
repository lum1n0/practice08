const active = document.querySelector('.active');
const catalog = document.querySelector('.catalog');
active.onclick = function() {
  catalog.classList.toggle('open');
};