class Bookshelf {
  constructor() {
    this.book = [];
  }

  add(title, author, shelfbook) {
    const newtitle = title;
    const newauthor = author;
    this.book.push({ name: newtitle, owner: newauthor });
    shelfbook.innerHTML += `
    <div class="${newtitle}">
      <h2>"${newtitle}" by ${newauthor}</h2>
      <button class="remove-btn">
        Remove
      </button>
    </div>`;
    localStorage.setItem('books', JSON.stringify(this.book));
  }

  remove(parent) {
    parent.remove();
    this.book = this.book.filter((x) => x.name !== parent.className);
    localStorage.setItem('books', JSON.stringify(this.book));
  }
}

const books = new Bookshelf();
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
const listtitle=document.querySelector("header");
const userinput=document.querySelector(".user-input");
const contact=document.querySelector(".contact")
const navitems=document.querySelectorAll(".ul-nav li")

navitems.forEach((element,index) => {element.addEventListener("click",()=>{
  if(index==0){
    listtitle.classList.remove("active")
    shelfbook.classList.remove("active")
    contact.classList.remove("active")
    userinput.classList.remove("active")
  }else if(index==1){
    listtitle.classList.add("active")
    shelfbook.classList.add("active")
    contact.classList.remove("active")
    userinput.classList.add("active")
  }else if(index==2){
    listtitle.classList.add("active")
    shelfbook.classList.add("active")
    contact.classList.add("active")
    userinput.classList.remove("active")
  }
}
)})


if (books.book != null) {
  books.book.forEach((element) => {
    shelfbook.innerHTML += `
    <div class="${element.name}">
      <h2>"${element.name}" by ${element.owner}</h2>
      <button class="remove-btn">
        Remove
      </button>
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

addbtn.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    msga.classList.add('active');
  } else if (books.book.filter((element) => element.name === title.value).length !== 0) { msgb.classList.add('active'); } else {
    msga.classList.remove('active');
    msgb.classList.remove('active');
    books.add(title.value, author.value, shelfbook);
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const parent = element.parentNode;
        books.remove(parent);
      });
    });
  }
});
