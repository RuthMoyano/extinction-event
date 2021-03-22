const listItemsOrdered = document.querySelectorAll('ol')
const listItemsUnordered = document.querySelectorAll('ul')
const image = document.querySelectorAll('#row')

function opacityImage(clickedImg){
    clickedImg.style.opacity = 0.3
}

function opacityList (clickedListItem){
    clickedListItem.style.opacity = 0.3
}

function lineThrough (clickedListItem){
    clickedListItem.style.textDecoration = 'line-through'
}


listItemsOrdered.forEach(list =>{
    list.addEventListener('click', (e)=>{
        const clickedListItem = e.target;
        lineThrough(clickedListItem)
    })
})

listItemsUnordered.forEach(list =>{
    list.addEventListener('click', (e)=>{
        const clickedListItem = e.target;
        opacityList(clickedListItem)
    })
})


image.forEach(pic=>{
    pic.addEventListener('click', (e)=>{
        const clickedImg = e.target;
        opacityImage(clickedImg)
    })
})

const button = document.querySelector('button')
button.addEventListener('click', function(){
    for (const pic of image){
        opacityImage(pic)
    }
    for (const list of listItemsOrdered){
        lineThrough(list)
    }
    for (const list of listItemsUnordered){
        opacityList(list)
        } 
})