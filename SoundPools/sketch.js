var song, fft;

function preload() {
  //Song = loadSound('assets/StrawberrySwing.mp3');
  Song = loadSound('assets/Hand.m4a')
}

function setup() {
  createCanvas(1000,700);


  button = createButton ('Play');
  button.position(475,625);
  button.size(50,25);
  button.mousePressed(mouseClickedFunc);
  
//  buttonCol = createButton ('Color');
//  buttonCol.position(900,500);
//  buttonCol.size(50,50);
//  buttonCol.mousePressed(ClickedFuncCol);
  
  background(random(255)); //random gray scale initial
  
  analyzer = new p5.Amplitude();
  
  analyzer.setInput(Song);
  
  fft = new p5.FFT();
  fft.setInput(Song);
}


function draw() {
  //background(,100,100);

  //var amp = analyzer.getLevel();
  var spectrum = fft.analyze();
  stroke(spectrum[5],spectrum[50],spectrum[100])
  DrawCircleStar(500,350, 5+spectrum[7]*5 ,spectrum[10]/10,spectrum[9]);
  stroke(6*spectrum[50],spectrum[100],spectrum[100])
  DrawCircleStar(500,350, 25+spectrum[27]*5 ,spectrum[1]*10,spectrum[100]*10);
  stroke(3*spectrum[50],spectrum[150],10*spectrum[10])
  DrawCircleStar(500,350, 50+spectrum[40]*10 ,spectrum[100]*10,spectrum[100]);
}
function mouseClickedFunc() {
  if (Song.isPlaying() ) {
    Song.stop();

} else {
    Song.play();
  }
}  


function mousePressed() {
  background(random(255),random(255),random(255));
}

//function mousePressed() {
//  var col = random(360);
//  fill(col,90,70);
//}

function DrawCircleStar(Left, Top, Diameter, StrokeW, Factor) {
  
  colorMode(HSB, 360,100,100,100);
    fill(100,0,10,0);  
    strokeWeight(2);
  ellipse(Left, Top, Diameter, Diameter);  //location, location, size, size
  ellipse(Left + Factor,Top,Diameter,Diameter);
  ellipse(Left, Top + Factor, Diameter, Diameter);
  ellipse(Left + Factor, Top + Factor, Diameter, Diameter);
  
  ellipse(Left - Factor,Top,Diameter,Diameter);
  ellipse(Left, Top - Factor, Diameter, Diameter);
  ellipse(Left - Factor, Top - Factor, Diameter, Diameter);
  
  ellipse(Left - -1*Factor, Top - Factor, Diameter, Diameter);
  ellipse(Left - Factor, Top - -1*Factor, Diameter, Diameter);
  colorMode(RGB);
}