const cursor = document.querySelector("div.cursor")

// when I clicked down on page I want the curosr to get bigger
const growCursor = function () {
    cursor.classList.add("is-down")
}

// When I clicked up I want the cursor the get smaller
const shrinkCursor = function () {
    cursor.classList.remove("is-down")
}

//Move the cursor based on coordinates 

const moveCursor = function(x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}


document.addEventListener("mousedown", function (){
    growCursor()
})

document.addEventListener("mouseup", function (){
    shrinkCursor()
})

document.addEventListener("mousemove", function (event) {
    moveCursor(event.pageX, event.pageY)


  //event.pageX + event.pageY
})