var input = document.querySelector('#input');
var btn = document.querySelector('#btn')
var items = document.querySelector('.items')




btn.addEventListener("click", (e)=>{
  items.style.display = "block"

  
  var newDiv = document.createElement("div");
newDiv.classList.add('newDiv')
items.appendChild(newDiv)

var li = document.createElement("li");
li.classList.add('newList')
li.innerHTML = input.value;
li.classList.add('list-items')

var deleteList = document.createElement("button");
deleteList.innerHTML = "Delete"
newDiv.appendChild(li)
newDiv.appendChild(deleteList)

deleteList.addEventListener("click", ()=>{
  newDiv.remove()
  console.log("clicked")
})

})



