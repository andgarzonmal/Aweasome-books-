let books=[]
let title=document.querySelector("#book")
let author=document.querySelector("#author")
const shelfbook=document.querySelector(".book-shelf")
const addbtn=document.querySelector(".add-btn")
let i=0 

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
    let removeBtn=document.querySelectorAll(".remove-btn")
removeBtn.forEach(element => {element.addEventListener("click",()=>{
  let parent=element.parentNode
  parent.remove()
  console.log(removeBtn)
})})
    i++
    ;
  }
})











