const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');
const scrollLock = document.querySelector('.content');
const ourMembers = document.getElementById('members');

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
    Picture: './Pictures/speaker1.jpg',
    Name: 'Diego Peñafiel',
    Title: 'Presidente',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker1.jpg',
    Name: 'Jefferson Peñafiel',
    Title: 'Socio activo',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker1.jpg',
    Name: 'Bryan Macias',
    Title: 'Logística',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker3.jpg',
    Name: 'Kerly Guamán',
    Title: 'Secretaria',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker3.jpg',
    Name: 'Maribel',
    Title: 'Socio activo',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker1.jpg',
    Name: 'Cristian Sosoranga',
    Title: 'Enfermero',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker1.jpg',
    Name: 'Ángel Rugel',
    Title: 'Socio activo',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const seeMembers = () => {
  let str = '';
  for (let i = 0; i < members.length; i += 1) {
    str += `<div class="card-member">
      <div class="picture"><img src=${members[i].Picture} alt=${members[i].Name}></div>
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
<h2 class="list-members"> Nuestros Socios</h2>
    <div class="guide-bar-members"></div>
        ${seeMembers()}
        </div>`;
