class Drops{
    constructor(x,y){
      //  this.rain=Bodies.circle(x,y,5,options)
        var options={
           
            restitution:0.1,
            friction:0.001,
            
            }
            this.x=x
            this.y=y
            this.r=5
            this.rain=Bodies.circle(this.x,this.y,this.r/2,options)
            World .add(world,this.rain)
            
    }
    display(){
        var pos = this.rain.position;
        fill("blue")
        ellipseMode(CENTER);        
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    update(){
        if(this.rain.position.y>height){
    
            Matter .Body.setPosition(this.rain,{x:random (0,400), y:random(0,400)})
    
        }
    }

}