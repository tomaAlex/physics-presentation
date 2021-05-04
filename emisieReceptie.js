var canvas;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var oscilator;
var amplificatorRF;
var amplificatorAF;
var antenaEmisie;
var antenaReceptie;
var microfon;
var amplificatorRFnemodulat;
var detector;
var unda;
var difuzor;
var undaLongitudinala;
var undaLongitudinala2;
var interferenta;

var cutieWidth = 100;
var cutieHeight = 100;
var antenaWidth = 100;
var antenaHeight = 100;
var obiecte = [];
var counterObiecte = 0;
var activat = 0; // la inceput, niciun element nu este activat pentru drag-and-drop
var aflaInformatii = false;

function preload()
{
  microfon = createImg('poze/microfon.gif');
  microfon.size(0,0);
  undaLongitudinala = createImg('poze/undaLongitudinala.gif');
  undaLongitudinala.size(0,0);
  undaLongitudinala2 = createImg('poze/undaLongitudinala.gif');
  undaLongitudinala2.size(0,0);
  interferenta = createImg('poze/interferenta.gif');
  interferenta.size(0,0);
}

function setup() {

  canvas = createCanvas(canvasWidth, canvasHeight);
  oscilator = loadImage('poze/oscilator.png');
  amplificatorRF = loadImage('poze/amplificatorRF.png');
  amplificatorAF = loadImage('poze/amplificatorAF.png');
  antenaEmisie = loadImage('poze/antenaEmisie.png');
  antenaReceptie = loadImage('poze/antenaReceptie.png');
  //microfon = createImg('poze/microfon.gif');
  amplificatorRFnemodulat = loadImage('poze/amplificatorRFnemodulat.png');
  detector = loadImage('poze/detector.png');
  unda = loadImage('poze/unda.png');
  difuzor = loadImage('poze/difuzor.png');
}

window.onmousedown = function(e)
{
  //alert(e.x + " " + e.y);
  // verifica cu ce obiect se intersecteaza mouse-ul
  var careSelectat;
  for(let i=1;i<=counterObiecte;i++)
  {
    //obiecte[i].show();
    if(e.x>=obiecte[i].x && e.x<=obiecte[i].x+obiecte[i].Width && e.y>=obiecte[i].y && e.y<=obiecte[i].y+obiecte[i].Height)
    {
      // acesta este elemntul selectat care trebuie sa fie mutat pe ecran
      careSelectat = i;
      i = counterObiecte + 2;
    }
  }
  if(careSelectat)
  {
    // un obiect a fost selectat si trebuie mutat pana cand mouse-ul se ridica
    activat = careSelectat;
  }
}

window.onmouseup = function(e)
{
  activat = 0;
  //console.log(mouseX + " " + mouseY);
}

window.onkeydown = function(e)
{
  //alert(e.keyCode);
  if(e.keyCode == 67)
  {
    // tasta 'c' creeaza un nou obiect
    // verifica ce fel de obiect se creeaza
    // 1) oscilator
    // 2) amplificatorRF;
    // 3) amplificatorAF;
    // 4) antenaEmisie;
    // 5) antenaReceptie;
    // 6) microfon;
    // 7) amplificatorRFnemodulat
    // 8) detector
    // 9) unda
    // 10) difuzor
    // 11) unda longitudinala
    // 12) unda longitudinala 2
    // 13) interferenta
    var r = prompt("1) oscilator\n2) amplificatorRF\n3) amplificatorAF\n4) antenaEmisie\n5) antenaReceptie\n6) microfon\n7) amplificatorRFnemodulat\n8) detector\n9) unda\n10) difuzor\n11) unda longitudinala\n12) unda longitudinala 2\n13) interferenta");
    if(r)
    {
      obiecte[++counterObiecte] = new imagineObiect(mouseX, mouseY, r);
      obiecte[counterObiecte].x -= obiecte[counterObiecte].Width / 2;
      obiecte[counterObiecte].y -= obiecte[counterObiecte].Height / 2;
      console.log("obiect nou creat: " + r);
    }
  }
  else if(e.keyCode == 13)
  {
    aflaInformatii = true;
    //window.open('https://www.google.com', '_self');
  }
}

function drawEveryImage()
{
  for(let i=1;i<=counterObiecte;i++)
  {
    obiecte[i].show();
  }
}

function draw() {

  // update the size of the screen, in the case of any changes being made over the window
  
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  cutieWidth = 0.1 * canvasWidth;
  cutieHeight = 0.1 * canvasHeight;
  antenaWidth = cutieHeight;
  antenaHeight = cutieWidth;
  
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(120);
  //image(microfon, 0, 0, canvasWidth, canvasHeight);
  //fill(255);
  drawEveryImage();
  if(activat!=0)
  {
    // un element este selectat in prezent si trebuie mutat
    if(aflaInformatii==true)
    {
      if(obiecte[activat].tipObiect==1)
      {
        window.open('https://en.wikipedia.org/wiki/Electronic_oscillator', '_self');
      }
      else if(obiecte[activat].tipObiect==2)
      {
        window.open('https://en.wikipedia.org/wiki/RF_power_amplifier', '_self');
      }
      else if(obiecte[activat].tipObiect==3)
      {
        window.open('https://en.wikipedia.org/wiki/Audio_power_amplifier', '_self');
      }
      else if(obiecte[activat].tipObiect==4)
      {
        window.open('https://upload.wikimedia.org/wikipedia/commons/d/dd/Dipole_receiving_antenna_animation_6_800x394x150ms.gif', '_self');
      }
      else if(obiecte[activat].tipObiect==5)
      {
        window.open('https://upload.wikimedia.org/wikipedia/commons/d/dd/Dipole_receiving_antenna_animation_6_800x394x150ms.gif', '_self');
      }
      else if(obiecte[activat].tipObiect==6)
      {
        window.open('https://cdn.instructables.com/F1Y/FZYI/J58FSPWZ/F1YFZYIJ58FSPWZ.ANIMATED.LARGE.gif', '_self');
      }
      else if(obiecte[activat].tipObiect==7)
      {
        window.open('https://en.wikipedia.org/wiki/RF_power_amplifier', '_self');
      }
      else if(obiecte[activat].tipObiect==8)
      {
        window.open('https://en.wikipedia.org/wiki/Detector_(radio)', '_self');
      }
      else if(obiecte[activat].tipObiect==9)
      {
        window.open('http://blog.soton.ac.uk/soundwaves/files/2013/12/light1.gif', '_self');
      }
      else if(obiecte[activat].tipObiect==10)
      {
        window.open('https://animagraffs.com/wp-content/uploads/loudspeaker/loudspeaker.gif', '_self');
      }
      else if(obiecte[activat].tipObiect==11)
      {
        window.open('https://www.acs.psu.edu/drussell/Demos/waves/Lwave-v8.gif', '_self');
      }
      aflaInformatii=false;
    }
    else
    {
      obiecte[activat].update();
    }
  }
}
