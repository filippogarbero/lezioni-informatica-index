let xMax = 400;
let yMax = 600;

let xrocket = xMax/2;
let yrocket = yMax*0.6;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#C0E1FC");
  //mostrare un testo bianco che mostra le coordinate del mouse sul foglio da disegno
  fill(255); //bianco
  //string, x, y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY,20,20);

 //aprire contesto di disegno
 push();
 fill(200);
 stroke(40);
//alternativa
rectMode(CENTER)
rect(xrocket, yrocket+30, 80, 180, 20);

//pop;
//triangolo
fill(200, 40, 40)
triangle(xrocket-40, yrocket-60, xrocket+40, yrocket-60, xrocket, yrocket-120, 140, 40, 140, 215, 235, 120)

//triangolino 1
fill(200, 40, 40)
triangle(xrocket-85, yrocket+130, xrocket-20, yrocket+85, xrocket-40, yrocket+85);

//triangolino 2
fill(200, 40, 40)
triangle(xrocket+85, yrocket+130, xrocket+20, yrocket+85, xrocket+40, yrocket+85);


//cerchio
fill(40, 150, 220);
stroke(255);
strokeWeight(3);
ellipse(xrocket, yrocket+30, 48, 48);
//finire contesto
pop();
//disegnare le stelle
//120
//tre tipi, a, b, c
// fino a che abbiamo 120 stelle
//stelle ellipse
push();
//tre cicli

//ciclo 1 = stella a, per 40 volte

for(let i=0; i < 3; i++){
  let starX = (i*37) % width + (i%3) * 5;
  let starY = ((i*73) % height) + (i%7);
  if ( i==0 ){
    //stella a
  fill(255,255,150)
  ellipse(starX, starY, 50);
  }else if( i == 1){
    //stella b
    fill(200, 100, 255);
    ellipse(starX, starY, 15)
    }else{
      //stella c
      fill(255, 255, 100);
      ellipse(starX, starY, 28) //2.8
    }
}
//ciclo 2 = stella b

//for(let i=0; i < 40; i++){
  //let starX = (i*37) % width + (i%3) * 5;
  //let starY = ((i*73) % height) + (i%7);
  //fill(200,100,250)
  //ellipse(starX, starY, 10);
//}

//ciclo 3 = stella c

pop();
}