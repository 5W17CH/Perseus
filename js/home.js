window.onload = () => {
  const transition_el = document.querySelector('.loading');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}