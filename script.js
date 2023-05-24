const openMenu = () => {
  const menu = document.getElementById('nav');
  menu.style.display = 'block';
};

function closeMenu() {
  const menu = document.getElementById('nav');
  menu.style.display = 'none';
}

openMenu();
closeMenu();

const dataSpeakers = [
  {
    name: 'Tim Berners-Lee',
    img: 'img/TimBernersLee.jpg',
    profession: 'He is a British computer scientist and physicist',
    achievements: 'credited with the title of inventor of the World Wide Web (WWW).',
  },
  {
    name: 'Brendan Eich',
    img: 'img/brendaneich.jpg',
    profession: 'He is an American programmer and software developer',
    achievements: 'He co-founded Mozilla and worked as the CTO (Chief Technology Officer) at Brave Software.',
  },
  {
    name: 'Linus Torvalds',
    img: 'img/LinusTorvalds.jpeg',
    profession: 'He is a Finnish software engineer.',
    achievements: 'Creator of the Linux operating system. While not directly related to web development, Linux is widely used in web servers.',
  },
  {
    name: 'Marc Andreessen',
    img: 'img/MarcAndreessen.jpg',
    profession: 'He is an American entrepreneur and venture capitalist',
    achievements: 'He co-founded Netscape Communications Corporation and held executive positions there.',
  },
  {
    name: 'Jeffrey Zeldman',
    img: 'img/JeffreyZeldman.jpg',
    profession: 'He is an American web designer and writer',
    achievements: 'He is the co-founder of A List Apart, an influential online publication on web design and development.',
  },
  {
    name: 'Matt Mullenweg',
    img: 'img/MattMullenweg.jpeg',
    profession: 'He is an American entrepreneur and programmer.',
    achievements: 'He is the co-founder and lead developer of WordPress, and has held executive positions at Automattic, the parent company of WordPress.com.',
  },
];

const sectionSpeakers = document.querySelector('#speakers');
const h2 = document.createElement('h2');
h2.textContent = 'Features Speakers';
sectionSpeakers.appendChild(h2);

const line2 = document.createElement('div');
line2.classList.add('line2');
sectionSpeakers.appendChild(line2);

const speakContainer = document.createElement('div');
speakContainer.classList.add('speakContainer');
sectionSpeakers.appendChild(speakContainer);

dataSpeakers.map((dataSpeak, i) => {
  const speakCard = document.createElement('div');
  speakCard.classList.add('speakCard');
  speakContainer.appendChild(speakCard);

  const imgCard = document.createElement('img');
  imgCard.classList.add('imgCard');
  imgCard.src = dataSpeak.img;
  speakCard.appendChild(imgCard);

  const descriptionCard = document.createElement('div');
  descriptionCard.classList.add('descriptionCard');
  speakCard.appendChild(descriptionCard);

  const h4 = document.createElement('h4');
  h4.textContent = dataSpeak.name;
  descriptionCard.appendChild(h4);

  const p1 = document.createElement('p');
  p1.textContent = dataSpeak.profession;
  descriptionCard.appendChild(p1);

  const line = document.createElement('div');
  line.classList.add('line');
  descriptionCard.appendChild(line);

  const p2 = document.createElement('p');
  p2.textContent = dataSpeak.achievements;
  descriptionCard.appendChild(p2);

  if (i > 1 && i < 6) {
    speakCard.classList.add('hideCard');
  }
  return dataSpeak;
});

const hideButton = document.createElement('button');
hideButton.classList.add('hideButton');
hideButton.textContent = 'More  ▽';
hideButton.type = 'button';
speakContainer.appendChild(hideButton);