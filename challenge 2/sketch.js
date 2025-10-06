let xMax = 400;
let yMax = 700;

let xcasa = xMax/2;
let ycasa = yMax*0.8;

let xprato = 0;
let yprato = 680;

let xtetto = xMax/2;
let ytetto = 510;

let xnuvola = 50;
let ynuvola = 50;



function setup() {
  createCanvas(400, 700);
}

function draw() {
  background("#7ebff5ff");
  //mostrare un testo bianco che mostra le coordinate del mouse sul foglio da disegno
  fill(255); //bianco
  //string, x, y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY,20,20);


  //aprire contesto di disegno

  

 
//nuvola
fill("#d5ebedff");
stroke(255);
strokeWeight(0);
ellipse(xnuvola +80, ynuvola+180, 80, 80);
ellipse(xnuvola +40, ynuvola+190, 80, 80);
ellipse(xnuvola +60, ynuvola+230, 80, 80);
ellipse(xnuvola +100, ynuvola+240, 80, 80);
ellipse(xnuvola +150, ynuvola+230, 80, 80);
ellipse(xnuvola +135, ynuvola+200, 80, 80);

ellipse(xnuvola +210, ynuvola+80, 80, 80);
ellipse(xnuvola +170, ynuvola+90, 80, 80);
ellipse(xnuvola +190, ynuvola+130, 80, 80);
ellipse(xnuvola +230, ynuvola+140, 80, 80);
ellipse(xnuvola +280, ynuvola+130, 80, 80);
ellipse(xnuvola +275, ynuvola+90, 80, 80);



//camino
fill("#514b48ff");
stroke("#371910ff");
strokeWeight(1);
rect(xcasa +80, ycasa-150, 30, 120);


// prato
 push();
 fill("#429639ff");
 stroke("#18801fff");
//alternativa
rectMode(CENTER)
rect(xprato, yprato +0, 8000, 45,);


//casa
 push();
 fill("#f5c77eff");
 stroke("#cd9946ff");
rect(xcasa, ycasa +0, 250, 200,);


//tetto
fill("#6c1919ff")
stroke("#470f0fff")
triangle(xtetto-125, ytetto-50, xtetto+125, ytetto-50, xtetto, ytetto-180)

//finestra destra
fill("#a8dce2ff");
stroke(255);
strokeWeight(2);
ellipse(xcasa +70, ycasa-40, 40, 40);


//finestra sinistra
fill("#a8dce2ff");
stroke(255);
strokeWeight(2);
ellipse(xcasa -70, ycasa-40, 40, 40);


//portone
fill("#7e3d2bff");
stroke("#371910ff");
strokeWeight(4);
rect(xcasa +0, ycasa+55, 50, 90);


}




