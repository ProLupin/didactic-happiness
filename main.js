canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "purple"
line_width = 3
MouseEvent = ""
var lastx, lasty
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    MouseEvent = "mousedown"
    color=document.getElementById("color").value
    line_width=document.getElementById("line_width").value
}
canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e) {
    MouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e) {
    MouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
    currentx = e.clientX - canvas.offsetLeft
    currenty = e.clientY - canvas.offsetTop
    if (MouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = line_width
        ctx.moveTo(lastx, lasty)
        ctx.lineTo(currentx, currenty)
        ctx.stroke()

    }
    lastx = currentx
    lasty = currenty

}
function Clear_Canvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}