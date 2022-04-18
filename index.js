let books=[]
let title=document.querySelector("#book")
let author=document.querySelector("#author")
const shelfbook=document.querySelector(".book-shelf")
const addbtn=document.querySelector(".add-btn")

addbtn.addEventListener("click",()=>{
  if(title.value ==="" || author.value ==="" ){
    return
  } else {
  let newtitle=title.value
  let newauthor=author.value
  books.push({name: newtitle, owner: newauthor})
    shelfbook.innerHTML+= `
    <div class="${newtitle}">
      <h2>${newtitle}</h2>
      <p>${newauthor}</p>
      <button class="remove-btn">
        Remove
      </button>
      <hr>
    </div>`
    localStorage.setItem("books",JSON.stringify(books)) 
    let removeBtn=document.querySelectorAll(".remove-btn")
    removeBtn.forEach(element => {element.addEventListener("click",()=>{
      let parent=element.parentNode
      parent.remove()
      console.log(books)
      books = books.filter(x => x.name != parent.className)
      console.log(books)
      localStorage.setItem("books",JSON.stringify(books))
    })
  })
    ;
  }
})





