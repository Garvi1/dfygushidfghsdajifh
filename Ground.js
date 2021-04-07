class Ground {
    constructor(x,y,w,h){
var options  = {
    isStatic:true
}
this.x = x;
this.y = y;
this.width = width;
this.height = height ;
this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
    }
    display(){
   var ps = this.body.position
   push();
   translate(ps.x,ps.y);
   rectMode(CENTER)
   rect(0,0,this.width,this.height)
   pop();
    }
}