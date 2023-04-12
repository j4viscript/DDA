function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(50)
    xOff = 200
    yOff = 0

    x = 550
    y = 250
    width = 150
    height = 150

    cuadrado(mouseX, mouseY,width,height)
    cuadrado(x,y,width,height)
    if((mouseX + width) > x && mouseX < (x + width) && mouseY < (y + height) && (mouseY + height) > y){
        stroke(255,0,0)
    } else {
        stroke(255)
    }
}

function linea(x1, y1, x2, y2) {
  let dx = x2 - x1
  let dy = y2 - y1
  
  let steps = Math.max(Math.abs(dx), Math.abs(dy))
  let xInc = dx / steps 
  let yInc = dy / steps 

  for (let i = 0; i <= steps; i++) { 
    point(x1, y1) 
    x1 += xInc 
    y1 += yInc 
  }
}

function cuadrado(x, y, width, height){
    linea(x, y, x + width, y)
    linea(x, y + height, x, y)
    linea(x + width, y + height, x, y + height)
    linea(x + width, y, x + height, y + height)
}