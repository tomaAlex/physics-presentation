function imagineObiect(x, y, tipObiect)
{
  this.x = x;
  this.y = y;
  this.Width = 10;
  this.Height = 10;
  this.tipObiect = tipObiect;
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
  
  if(tipObiect==4 || tipObiect==5)
  {
    // dimensiuni antena
    this.Width = antenaWidth;
    this.Height = antenaHeight;
  }
  else
  {
    // dimensiuni cutie
    this.Width = cutieWidth;
    this.Height = cutieHeight;
  }
  
  this.show = function()
  {
    if(this.tipObiect==1)
    {
      image(oscilator, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==2)
    {
      image(amplificatorRF, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==3)
    {
      image(amplificatorAF, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==4)
    {
      image(antenaEmisie, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==5)
    {
      image(antenaReceptie, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==6)
    {
      //image(microfon, this.x, this.y, this.Width, this.Height);
      //microfon.position(this.x, this.y);
      microfon.size(this.Width, this.Height);
      microfon.position(this.x, this.y);
    }
    else if(this.tipObiect==7)
    {
      image(amplificatorRFnemodulat, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==8)
    {
      image(detector, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==9)
    {
      image(unda, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==10)
    {
      image(difuzor, this.x, this.y, this.Width, this.Height);
    }
    else if(this.tipObiect==11)
    {
      undaLongitudinala.size(this.Width, this.Height);
      undaLongitudinala.position(this.x, this.y);
    }
    else if(this.tipObiect==12)
    {
      undaLongitudinala2.size(this.Width, this.Height);
      undaLongitudinala2.position(this.x, this.y);
    }
    else if(this.tipObiect==13)
    {
      interferenta.size(this.Width, this.Height);
      interferenta.position(this.x, this.y);
    }
  }
  
  this.update = function()
  {
    this.x = mouseX - this.Width / 2;
    this.y = mouseY - this.Height / 2;
  }
}
