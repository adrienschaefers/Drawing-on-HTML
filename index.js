const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")
let isMouseDown = false


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

    // IcI on paramètre le canvas
    canvas.width = w * dpi 
    canvas.height = h * dpi
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"

    //Quel est le type de rendu que je souhaite avoir ? 2D,3D?
    const context = canvas.getContext("2d")

    //Ici on paramètre le contenu qu'on veut faire apparaître dans le canvas
    context.fillStyle  = ("red")
    context.strokeStyle = ("red")
    context.lineWidth = 80
    context.lineCap = "round"
    context.lineJoin ="round"
    context.scale (dpi, dpi) //indispensable si c'est un écran rétina
}


//Lets start to draw based on the canvas and x and Y
const startDraw = function (canvas, x , y){
    const context = canvas.getContext("2d")
    context.moveTo(x,y)
}


// Let's draw based on three things
const moveDraw = function (canvas, x, y){
    const context = canvas.getContext("2d")

    if (isMouseDown) {
        context.lineTo(x , y)
        context.stroke()
    } 
}


setupCanvas(canvasTag)



document.addEventListener("mousedown", function (event){
    isMouseDown = true
    growCursor()
    startDraw(canvasTag, event.pageX, event.pageY)
})

document.addEventListener("mouseup", function (){
    isMouseDown = false
    shrinkCursor()
})

document.addEventListener("mousemove", function (event) {
    moveCursor(event.pageX, event.pageY)
  //event.pageX + event.pageY
    moveDraw(canvasTag, event.pageX, event.pageY)
})



