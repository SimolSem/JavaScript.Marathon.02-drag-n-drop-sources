const items = document.querySelectorAll('.item')
const placeHolders = document.querySelectorAll('.placeholder')

var currentItem

for (const item of items) {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
}

for (const placeHolder of placeHolders) {
    placeHolder.addEventListener('dragover', dragover)
    placeHolder.addEventListener('dragenter', dragenter)
    placeHolder.addEventListener('dragleave', dragleave)
    placeHolder.addEventListener('drop', dragdrop)
}

function dragover(event) {
  // console.log('dragover', event)
   event.preventDefault()

}
function dragenter(event) {
   // console.log('dragenter')
    event.target.classList.add('hovered')
    
}
function dragleave(event) {
    //console.log('dragleave')
    event.target.classList.remove('hovered')    
    
}
function dragdrop(event) {
   // console.log('dragdrop')
   event.target.classList.remove('hovered')  
   if (event.target.className === 'item') {
    event.target.parentElement.append(currentItem)
   }
   else {
    event.target.append(currentItem)
   }    
 
}


function dragstart(event){
    //console.log('dragstart', event.target)
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0) 
    currentItem = event.target
    //console.log(currentItem)
}

function dragend(event){

    //Вариант 1
    //event.target.className = 'item'

    //Вариант 2
    //event.target.classList.remove('hold', 'hide') 

    //Вариант 3
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')   
}