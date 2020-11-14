const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")


// when I clicked down on page I want the curosr to get bigger
const growCursor = function () {
    cursor.classList.add("is-down")
    cursor.innerHTML = `<span>Let's get some fun !</span>`
}

// When I clicked up I want the cursor the get smaller
const shrinkCursor = function () {
    cursor.classList.remove("is-down")
    cursor.innerHTML = `<span>Click me !</span>`
}

//Move the cursor based on coordinates 

const moveCursor = function(x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

//Set up a canvas 
const setupCanvas = function (canvas){
    const w = window.innerWidth
    const h = window.innerHeight
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi 
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
}


setupCanvas(canvasTag)


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



