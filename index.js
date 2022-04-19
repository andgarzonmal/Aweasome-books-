class  Bookshelf {
  constructor (){
    this.book=[]
  }

  add(title, author, books, shelfbook) {
    const newtitle = title;
    const newauthor = author;
    
    books.push({ name: newtitle, owner: newauthor });
    shelfbook.innerHTML += `
    <div class="${newtitle}">
      <h2>${newtitle}</h2>
      <p>${newauthor}</p>
      <button class="remove-btn">
        Remove
      </button>
      <hr>
    </div>`;
    localStorage.setItem('books', JSON.stringify(books));
  }  
}
//#########
let books = new Bookshelf();


console.log(books);
const bookstorage = JSON.parse(localStorage.getItem('books'));
if (bookstorage != null) {
  books.book = bookstorage;
}
const title = document.querySelector('#book');
const author = document.querySelector('#author');
const shelfbook = document.querySelector('.book-shelf');
const addbtn = document.querySelector('.add-btn');
const msga = document.querySelector('.msga');
const msgb = document.querySelector('.msgb');
if (books.book != null) {
  books.book.forEach((element) => {
    shelfbook.innerHTML += `
    <div class="${element.name}">
      <h2>${element.name}</h2>
      <p>${element.owner}</p>
      <button class="remove-btn">
        Remove
      </button>
      <hr>
    </div>`;
  });
}

if (books.book !== '') {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const parent = element.parentNode;
      parent.remove();
      books.book = books.book.filter((x) => x.name !== parent.className);
      localStorage.setItem('books', JSON.stringify(books.book));
    });
  });
}

// function add() {
//   const newtitle = title.value;
//   const newauthor = author.value;
//   books.push({ name: newtitle, owner: newauthor });
//   shelfbook.innerHTML += `
//   <div class="${newtitle}">
//     <h2>${newtitle}</h2>
//     <p>${newauthor}</p>
//     <button class="remove-btn">
//       Remove
//     </button>
//     <hr>
//   </div>`;
//  
// }

function remove(parent) {
  parent.remove();
  books = books.filter((x) => x.name !== parent.className);
  localStorage.setItem('books', JSON.stringify(books));
}
addbtn.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    msga.classList.add('active');
  } else if (books.book.filter((element) => element.name === title.value).length !== 0) { msgb.classList.add('active'); } else {
    msga.classList.remove('active');
    msgb.classList.remove('active');
    books.add(title.value, author.value, books.book, shelfbook);
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const parent = element.parentNode;
        remove(parent);
      });
    });
  }
});




