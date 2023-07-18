import BookCollection from './modules/bookList.js';
import Navpage from './modules/navigationPage.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const bookCollection = new BookCollection();
const nav = new Navpage();

const addBookForm = document.querySelector('.book-form');
addBookForm.addEventListener('submit', (event) => bookCollection.addBook(event));

bookCollection.displayBooks();

const dateTime = document.querySelector('.date-time');

const now = DateTime.now();
dateTime.innerHTML = `${now.day}/${now.month}/${now.year} ${now.hour}:${now.minute}`;

window.onload = (nav);
