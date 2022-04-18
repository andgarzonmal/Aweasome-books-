let books=[]
let title=document.querySelector("#book")
let author=document.querySelector("#author")
const shelfbook=document.querySelector(".book-shelf")
const addbtn=document.querySelector(".add-btn")
let i=0
let removeBtns = []

addbtn.addEventListener("click",()=>{
  if(title.value ==="" || author.value ==="" ){
    return
  } else {
  let newtitle=title.value
  let newauthor=author.value
  books.push({name: newtitle, owner: newauthor})
    shelfbook.innerHTML+= `
    <div class="${newtitle}">
      <h2>${books[i].name}</h2>
      <p>${books[i].owner}</p>
      <button class="remove-btn" id="button${i}">
        Remove
      </button>
      <hr>
    </div>`
    let removeBtn=document.querySelector(`#button${i}`)
    removeBtns.push(removeBtn)
    console.log(removeBtns)
    i++
    ;
  }
})

removeBtns












