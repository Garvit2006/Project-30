class Block  {
    constructor(x, y, width, height,angle){
        var options = {
          'restitutuion':0.7,
          'friction':0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
  }
      display(){
        var angle = this.body.angle;
        push();
        if(this.body.speed<5){
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        
        rect(0,0,this.width,this.height);
        pop();
        }else{
          push();
          World.remove(world,this.body);
          this.visibility = this.visibility-1;
          tint(255,this.visibility);
          pop();
        }
      }
}
