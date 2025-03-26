const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';
const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60rem';
const hElement = document.querySelector('h1');
hElement.classList.add('news__title');
hElement.textContent = 'Aktuální novinky';
const zpravaElement = document.querySelector('#zprava1');
zpravaElement.classList.add('post--main');
const imageElement = document.querySelector('#zprava3 img');
imageElement.src = 'images/zprava3-novy.jpg';
