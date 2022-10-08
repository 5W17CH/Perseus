const transition_el = document.querySelector('.loading');
const ShowInfo = document.querySelector('.showInfo')

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
ShowInfo.classList.remove('close');

function ShowJumpInfo() {
  ShowInfo.classList.remove('close');
  ShowInfo.classList.add('active');
  document.getElementById('infoContainer').style.opacity = '1';
  document.getElementById('infoImg1').style.background = 'url(../assets/pic1.jpg) center no-repeat';
  document.getElementById('infoImg1').style.backgroundSize = 'cover';
}

function ShowJumpInfo2() {
  ShowInfo.classList.remove('close');
  ShowInfo.classList.add('active');
  document.getElementById('infoContainer').style.opacity = '1';
  document.getElementById('infoImg1').style.background = 'url(../assets/pic2.jpg) center no-repeat';
  document.getElementById('infoImg1').style.backgroundSize = 'cover';
}

function ShowJumpInfo3() {
  ShowInfo.classList.remove('close');
  ShowInfo.classList.add('active');
  document.getElementById('infoContainer').style.opacity = '1';
  document.getElementById('infoImg1').style.background = 'url(../assets/pic3.jpg) center no-repeat';
  document.getElementById('infoImg1').style.backgroundSize = 'cover';
}

function ShowJumpInfo4() {
  ShowInfo.classList.remove('close');
  ShowInfo.classList.add('active');
  document.getElementById('infoContainer').style.opacity = '1';
  document.getElementById('infoImg1').style.background = 'url(../assets/pic4.jpg) center no-repeat';
  document.getElementById('infoImg1').style.backgroundSize = 'cover';
}

function CloseJumpInfo() {
  document.getElementById('infoContainer').style.opacity = '0';
  ShowInfo.classList.add('close');
  ShowInfo.classList.remove('active')
}