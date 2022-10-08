const transition_el = document.querySelector('.loading');
const ShowInfo = document.querySelector('.showInfo');
const InfoContainer = document.getElementById('infoContainer')

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

ShowInfo.classList.remove('active');

function Planet() {
  ShowInfo.classList.add('active');
  InfoContainer.style.opacity = '1';
}