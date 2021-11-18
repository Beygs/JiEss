const borrow = document.getElementById('borrow');
const mostBorrowed = document.getElementById('mostBorrowed');
const lessBorrowed = document.getElementById('lessBorrowed');
const findBookAt = document.getElementById('findBookAt');
const deleteIdBtn = document.getElementById('deleteIdBtn');
const alpha = document.getElementById('alpha');
const findId = document.getElementById('findId');
const deleteId = document.getElementById('deleteId');
const accordion = document.getElementsByClassName('container');

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

borrow.innerText = books.every(b => b.rented >= 1) ? 'Oui' : 'Non';

let mostBorrowedBook =  books.find(book => book.rented === Math.max.apply(Math, books.map(b => b.rented)));

mostBorrowed.innerText = mostBorrowedBook.title;

let lessBorrowedBook =  books.find(book => book.rented === Math.min.apply(Math, books.map(b => b.rented)));

lessBorrowed.innerText = lessBorrowedBook.title;

function findBook() {
  findBookAt.innerText = 'Pas de livre à cet ID !';
  findBookAt.innerText = books.find(b => b.id === Number(findId.value)).title
}

function sortAlphabetically() {
  let sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
  alpha.innerHTML = sortedBooks.map(b => `<li>${b.title}</li>`).join('');
}

findId.addEventListener('keyup', e => {
  findId.value = findId.value.replace(/[^\d]/, '');
  if (findId.value.length > 6) {
    findId.value = findId.value.match(/\d{6}/)
  }
  findBook();
})

deleteId.addEventListener('keyup', e => {
  deleteId.value = deleteId.value.replace(/[^\d]/, '');
  if (deleteId.value.length > 6) {
    deleteId.value = deleteId.value.match(/\d{6}/)
  }
})

deleteIdBtn.addEventListener('click', () => {
  let book = books.find(b => b.id === Number(deleteId.value)).title
  if (book) {
    books.splice(books.findIndex(b => b.title === book), 1);
    sortAlphabetically();
  }
})

for (let i = 0; i < accordion.length; i++) {
  accordion[i].querySelector('.question').addEventListener('click', () => {
    accordion[i].classList.toggle('active')
  })
}

findBook();
sortAlphabetically();
