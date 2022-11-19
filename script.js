function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const localStorage = window.localStorage;
const savedBooks = JSON.parse(localStorage.getItem('bookshelf'));



function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToShelf(title, author, pages, read){
  const newBook = new Book(title, author, pages, read);
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  bookshelf.push(newBook);
  localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
 
  displayBook(newBook);
}

function submitBookForm() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const bookRead = document.querySelector('#read').checked;

  const form = document.querySelector('#myForm');

  form.classList.toggle('hide');
  addBookToShelf(title, author, pages, bookRead);
}

function displayBook(book){
  const bookContainer = document.querySelector('#book-container');

  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  
  const bookInfo = document.createElement('div');
  const title = document.createElement('h2');
  const author = document.createElement('p');
  const pageCount = document.createElement('p');
  const statusRead = document.createElement('p')

  const removeBtn = document.createElement('button');
  removeBtn.addEventListener('click', removeBook);
  removeBtn.classList.add('btn', 'remove');
  removeBtn.textContent = 'X';
    
  title.textContent = book.title;
  author.textContent = `by ${book.author}`;
  pageCount.textContent = `${book.pages} pages`;

  statusRead.textContent = 'Read';
  
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(pageCount);
  bookInfo.appendChild(statusRead);
  bookInfo.appendChild(removeBtn);

 
  bookCard.appendChild(bookInfo);
  bookCard.appendChild(bookInfo);
  bookContainer.appendChild(bookCard);
}


function removeBook(e) {
 
  
 
}

function showBookForm() {
  const form = document.querySelector('#myForm');

  form.classList.toggle('hide');
}

document.querySelector('#addBtn').addEventListener('click', submitBookForm);
//document.querySelector('#new-book').addEventListener('click', showBookForm);
window.onload = savedBooks.forEach(book => displayBook(book));