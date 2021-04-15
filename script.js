const c = document.getElementById("mainCanv");
const ctx = c.getContext("2d"); 
c.width = 800;
c.height = 500;

class Ufo{
    constructor(name){
        this.name = name;
        this.x = Math.random * 500;
        this.y = Math.random * 500;
        this.r  = 50;
        this.dx = 1;
        this.dy=1;
        this.s = 30;

    }


    update(){
        this.x = this.x+this.s+this.dx;
        this.y = this.y+this.s+this.dy;
       
        if(this.x  + this.r>= 500 || this.x - this.r <= 0) this.dx*=-1;
        if(this.y  + this.r>= 500 || this.y - this.r <= 0) this.dy*=-1;

    }
}

function Start(){

  var ufko = new Ufo("ayayaya");

  window.setInterval(  ufko.update(), 50);


  
}x