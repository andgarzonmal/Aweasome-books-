let books=[]
let title=document.querySelector("#book")
let author=document.querySelector("#author")
const shelfbook=document.querySelector(".book-shelf")
const addbtn=document.querySelector(".add-btn")
let i=0


   


addbtn.addEventListener("click",()=>{
    let newtitle=title.value
    let newauthor=author.value
    books.push({name: newtitle, owner: newauthor})
    shelfbook.innerHTML+= `<h2>${books[i].name}</h2>
    <p>${books[i].owner}</p>
    <button class="remove-btn">
      Remove
    </button>
    <hr>`
    i++
    console.log(books)
})