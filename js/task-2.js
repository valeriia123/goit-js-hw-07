const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const galleryEl = document.querySelector('.gallery');

const createGalleryEL = imagesInfo => {
  return `
  <li>
  <img src="${imagesInfo.url}" alt="${imagesInfo.alt}">
  </li>
  `
}

const galleryArr = images.map(image => createGalleryEL(image)).join('');
console.log(galleryArr);

galleryEl.innerHTML = galleryArr;

const imgElStyle = document.querySelectorAll('img');
imgElStyle.forEach(stuleEl => {
  stuleEl.classList.add('width-change');
  stuleEl.style.width = '400px';
  stuleEl.style.display = 'flex';
  stuleEl.style.flexWrap = 'wrap';
  stuleEl.style.gap = '10px';
});
 
const listElStyle = document.querySelectorAll('li');
listElStyle.forEach((listStyleType) => {

  listStyleType.style.listStyleType = 'none';
});

galleryEl.classList.add('position-change');
galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.gap = '30px';