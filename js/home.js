window.onload = () => {
  const elem = document.querySelector('.loading');

  setTimeout(() => {
    elem.classList.remove('is-active');
  }, 350);
};