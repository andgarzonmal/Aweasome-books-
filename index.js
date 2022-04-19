let books = JSON.parse(localStorage.getItem('books'));
const title = document.querySelector('#book');
const author = document.querySelector('#author');
const shelfbook = document.querySelector('.book-shelf');
const addbtn = document.querySelector('.add-btn');
const msga = document.querySelector('.msga');
const msgb = document.querySelector('.msgb');
function show(books) {
  books.forEach((element) => {
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

show(books);

if (books !== '') {
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const parent = element.parentNode;
      parent.remove();
      books = books.filter((x) => x.name !== parent.className);
      localStorage.setItem('books', JSON.stringify(books));
    });
  });
}

function add() {
  const newtitle = title.value;
  const newauthor = author.value;
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

function remove(parent) {
  parent.remove();
  books = books.filter((x) => x.name !== parent.className);
  localStorage.setItem('books', JSON.stringify(books));
}
addbtn.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    msga.classList.add('active');
  } else if (books.filter((element) => element.name === title.value).length !== 0) { msgb.classList.add('active'); } else {
    msga.classList.remove('active');
    msgb.classList.remove('active');
    add();
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const parent = element.parentNode;
        remove(parent);
      });
    });
  }
});
