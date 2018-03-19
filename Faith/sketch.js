var diameter; 
var angle = 0;
H = 600;
W = 600
var song, analyzer;

function preload(){ 
  song1 = loadSound("Song/nostalgia.mp3");
  }

function setup() {
  angleMode(DEGREES)
  createCanvas(W+600, H+500);
  diameter = H - 10;
  noStroke();
  song1.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

}

function draw() {
  background(240,248,255);
  textSize(18);
  noStroke();
  
  var rms = analyzer.getLevel();
  var f1 =  SineWave(angle,width/2,.9*width/2,2,0)
  var e1 =  SineWave(angle,width/2,.9*width/2,2,90)
  
  fill (230,230,230);
  ellipse(f1, 400, 20+rms*100, 20+rms*100); // right to left
  
  fill (240,240,230);
  ellipse([width]-200, e1,20+rms*300,20+rms*300) //up down
  
  fill (230,240,230);
  ellipse(width/2, e1,20+rms*300,20+rms*300) //up down
  
    fill (230,240,250);
  ellipse(width/6, e1,20+rms*300,20+rms*300) //up down

  fill (220,210,235);
  ellipse(f1, e1,20+rms*100, 20+rms*100);//little circ with big rotation to the left 
  
  var g1 = SineWave(angle, 128,250,0,0);
  for (var i = 0; i<36; i = i +1) {
    g1 = SineWave(angle, 128,120,4,15*i)
    
    // The wavy wave
    fill (g1,g1+200,128,200);
    ellipse(20+i*50,g1+100,10+rms*100, 10+rms*100);
    
    fill (g1,g1+300,128,255);
    ellipse(20+i*50,g1+200,10+rms*100, 10+rms*100);
    
    fill (g1,255-g1,128,200);
    ellipse(20+i*50,g1+300,10+rms*100, 10+rms*100);
    
    fill (g1,255-g1,128,200);
    ellipse(20+i*50,g1+400,10+rms*100, 10+rms*100);
    
    fill (g1,205-g1,118,255);
    ellipse(20+i*50,g1+500,10+rms*100, 10+rms*100);
    
    /// no wavy wave
    fill (20+i*50,g1+200,128,200);
    ellipse(20+i*50,200,10+rms*100, 10+rms*100);
    
    fill (20+i*300,g1+300,200,200);
    ellipse(20+i*50,300,10+rms*100, 10+rms*100);
    
    fill (20+i*50,g1+200,128,200);
    ellipse(20+i*50,400,10+rms*100, 10+rms*100);
    
    fill (20+i*300,g1+300,128,200);
    ellipse(20+i*50,500,10+rms*100, 10+rms*100);
    
    fill (g1,155-g1,108,255);
    ellipse(20+i*50,600,10+rms*100, 10+rms*100);
  }

  angle += 1;
  
}

function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
