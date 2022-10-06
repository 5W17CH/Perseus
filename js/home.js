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
  }, 1000);
};

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
};