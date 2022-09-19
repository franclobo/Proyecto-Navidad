const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');
const scrollLock = document.querySelector('.content');
const ourMembers = document.getElementById('members');
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

const members = [
  {
    Picture: './Pictures/diego.png',
    Name: 'Diego Peñafiel',
    Title: 'Presidente',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/speaker1.jpg',
    Name: 'Jefferson Peñafiel',
    Title: 'Socio activo',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/bryan.png',
    Name: 'Bryan Macias',
    Title: 'Logística',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/kerly.png',
    Name: 'Kerly Guamán',
    Title: 'Secretaria',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/speaker3.jpg',
    Name: 'Joselyn Quispillo',
    Title: 'Tesorera',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/mary.png',
    Name: 'Maricela Rodríguez',
    Title: 'Logística',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/cristian.png',
    Name: 'Cristian Sosoranga',
    Title: 'Enfermero',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    Picture: './Pictures/angel.png',
    Name: 'Ángel Rugel',
    Title: 'Animador',
    Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
];

const seeMembers = () => {
  let str = '';
  for (let i = 0; i < members.length; i += 1) {
    str += `<div class="card-member">
      <div class="picture"><img class="picture" src=${members[i].Picture} alt=${members[i].Name}></div>
      <div>
        <div class="card-body">
          <h3 class="member-name">${members[i].Name}</h3>
          <h3 class="member-title">${members[i].Title}</h3>
        </div>
        <p class="description-member">${members[i].Description}</p>
      </div>
    </div>`;
  }
  return str;
};

ourMembers.innerHTML = `
<h2 class="list-members" id="socios"> Nuestros Socios</h2>
    <div class="guide-bar-members"></div>
        ${seeMembers()}
        </div>`;

function displayProject() {
  projectPopup.classList.remove('hidePopup');
  projectPopup.innerHTML = `
    <div class="popup-container">
      <button class="close-popup" onclick="projectPopup.classList.add('hidePopup');"><img src="./Icons/cross.svg" alt=""></button>
      <div class="popup-header">
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
