var diametro;
diametro = 100






function setup() {
  //variable local
  var x;
  x = 50
    //crear lienzo (dimhor, dimvert)
  createCanvas(windowWidth, windowHeight);

  //pintar el fondo
  //background(color)
  background(255 / 2, 2, 3);


}

function draw() {
  //var miColor= color(random(200), random(50), random(40));
  //un eclipse sigue el mouse
  background(255 / 2, 2, 3);
  //mielipse();

  if (mouseX < width/3) {
    muchasElipses(6,255);
  }



}

function mielipse() {
  //definir ancho de figura
  //strokeWeight(px)
  strokeWeight(3);
  //definir color del borde
  //stroke(color)
  stroke(0, 0, 2, 7);
  //definir color relleno
  //fill(color);
  fill(mouseX, mouseY, 87, 120);
  //dibujar elipse
  //ellipse(posx,posy width, height);
  //medidos en pixeles
  //usamos variables de p5.js
  //mouseX, mouseY
  ellipse(mouseX, mouseY, diametro, diametro);
  //asignar otro valor
  diametro = mouseX + mouseY + 1;
  diametro = random(100);

}

//declarar funcion nueva
//gacer muchas ellipses en lugares aleatorios y de colores aleatorios
function muchasElipses() {
  for (var i = 0; i < 100; i++) {

    fill(random(59), random(57), random(80), random(255));
    //fill(random(255));
    //elipse en posicion aleatoria
    ellipse(random(width), random(height), 123, 128);

  }

}