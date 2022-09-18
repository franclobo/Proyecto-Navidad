const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');
const scrollLock = document.querySelector('.content');
const seeProjectButton = document.querySelectorAll('.pjbutton');
const projectPopup = document.querySelector('.popup-window');

mobileMenu.addEventListener('click', () => {
  dropDown.classList.remove('hide-menu');
  scrollLock.classList.add('lockscroll');
});
closeBtn.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
  scrollLock.classList.remove('lockscroll');
});
optMenu.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
  scrollLock.classList.remove('lockscroll');
});

function displayProject() {
  projectPopup.classList.remove('hidePopup');
  projectPopup.innerHTML = `
    <div class="popup-container">
      <div class="popup-header">
        <button class="close-popup" onclick="projectPopup.classList.add('hidePopup');"><img src="./Icons/cross.svg" alt=""></button>
        <h3 class="popup-title">Colabora con Nosotros</h3>
      </div>
      <div class="popup-content">
        <p class="popup-p">
          Agradecemos tu contribución económica al número de cuenta:
          <br/> Banco Pichincha
          <br/> Cuenta de ahorros
          <br/> 2204188183
          <br/> A nombre de: Joselyn Quispillo
        </p>
      </div>
    </div>`;
}

seeProjectButton.forEach((div) => {
  div.addEventListener('click', () => {
    displayProject();
  });
});
