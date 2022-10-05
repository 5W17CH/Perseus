var i = 0;

function loop() {
  var el = document.getElementById('head');
  var el2 = document.getElementById('description');

  el.style.animation = 'none';
  el.offsetWidth; /* trigger reflow */
  el.style.animation = null;
  el2.style.animation = 'none';
  el2.offsetWidth; /* trigger reflow */
  el2.style.animation = null;
  
  var fonts = ["ailerons", "galactico"];
  el.style.fontFamily = fonts[i];
  el2.style.fontFamily = fonts[i];

  var size = ["8rem", "6rem"];
  el.style.fontSize = size[i];

  var sizeW = ["68%", "85%"];
  el2.style.width = sizeW[i];

  i = (i + 1) % fonts.length;
};
setInterval(loop, 6000);

const transition_el = document.querySelector('.loading');

window.onload = () => {
  const transition_el = document.querySelector('.loading');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

};

function addLoad() {
  transition_el.classList.add('is-active');
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 600);
};

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
};